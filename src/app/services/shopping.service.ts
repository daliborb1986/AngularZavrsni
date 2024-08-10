import { Injectable } from '@angular/core';
import { Product } from '../product';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private url = 'http://localhost:3000/cart';
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  private totalItemsSubject = new BehaviorSubject<number>(0);
  totalItems$ = this.totalItemsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadCart();
  }
  private loadCart() {
    this.http.get<Product[]>(this.url).subscribe((products) => {
      this.cart = products;
      this.cartSubject.next(this.cart);
      this.calculateTotalItems();
    });
  }

  addToCart(product: Product, quantity: number) {
    const existingProduct = this.cart.find(
      (p) => p.id === product.id.toString()
    );
    if (existingProduct) {
      existingProduct.quantity += quantity;
      this.updateProductQuantity(
        existingProduct.id,
        existingProduct.quantity
      ).subscribe();
    } else {
      product.quantity = quantity;
      product.id = product.id.toString();
      this.http.post<Product>(this.url, product).subscribe(() => {
        this.loadCart();
      });
    }
  }

  removeFromCart(product: Product): void {
    this.http
      .delete(`http://localhost:3000/cart/${product.id.toString()}`)
      .subscribe(() => {
        this.loadCart();
      });
  }
  calculateTotalItems() {
    this.totalItemsSubject.next(this.getTotalProducts());
  }

  updateProductQuantity(
    productId: number | string,
    quantity: number
  ): Observable<any> {
    return this.http.patch(`${this.url}/${productId.toString()}`, { quantity });
  }

  getTotalProducts(): number {
    return this.cart.reduce((total, product) => total + product.quantity, 0);
  }

  clearCart(): Observable<any> {
    return forkJoin(
      this.cart.map((item) => this.http.delete(`${this.url}/${item.id}`))
    ).pipe(
      tap(() => {
        this.cart = [];
        this.cartSubject.next(this.cart);
        this.calculateTotalItems();
      })
    );
  }

  getCart() {
    return this.cart;
  }
}
