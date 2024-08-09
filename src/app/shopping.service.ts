import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    const existingProduct = this.cart.find((p) => p.id === product.id.toString());
    if (existingProduct) {
      existingProduct.quantity += quantity;
      this.updateProductQuantity(
        existingProduct.id,
        existingProduct.quantity
      ).subscribe();
    } else {
      product.quantity = quantity;
      product.id = product.id.toString()
      // this.cart.push(product);
      this.http.post<Product>(this.url, product).subscribe(() => {
        // this.cartSubject.next(this.cart);
        this.loadCart();
      });
    }
    // this.cartSubject.next(this.cart);
  }

  removeFromCart(product: Product): void {
    // this.cart = this.cart.filter((p) => p.id !== product.id);
    this.http.delete(`http://localhost:3000/cart/${product.id.toString()}`).subscribe(() => {
      // this.cartSubject.next(this.cart);
      this.loadCart();
    });
  }
  calculateTotalItems() {
    this.totalItemsSubject.next(this.getTotalProducts());
  }

  updateProductQuantity(productId: number | string, quantity: number): Observable<any> {
    return this.http.patch(`${this.url}/${productId.toString()}`, { quantity });
  }

  // updateCart(products: Product[]) {
  //   this.cart = products;
  //   this.cartSubject.next(this.cart);
  // }
  getTotalProducts(): number {
    return this.cart.reduce((total, product) => total + product.quantity, 0);
  }
  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart);
    this.http.delete(this.url).subscribe(() => {
      this.calculateTotalItems();
    });
  }
  getCart() {
    return this.cart;
  }
}
