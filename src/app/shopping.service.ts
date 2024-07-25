import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  private totalItemsSubject = new BehaviorSubject<number>(0);
  totalItems$ = this.totalItemsSubject.asObservable();

  constructor() {}

  

  addToCart(product: Product, quantity: number) {
    const existingProduct = this.cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      product.quantity = quantity;
      this.cart.push(product);
    }
    this.cartSubject.next(this.cart);
  }
 
  removeFromCart(product: Product): void {
    this.cart = this.cart.filter(p => p.id !== product.id);
    this.cartSubject.next(this.cart);
  }
  
  updateCart(products: Product[]) {
    this.cart = products;
    this.cartSubject.next(this.cart)
  }
  getTotalProducts(): number {
    return this.cart.reduce((total, product) => total + product.quantity, 0);
  }
  // updateQuantity(productId: number, quantity: number): void {
  //   const product = this.cart.find(p => p.id === productId);
  //   if (product) {
  //     product.quantity = quantity;
  //     this.cartSubject.next([...this.cart]);
  //     this.updateTotalItems();
  //   }
  // }
  private updateTotalItems() {
    const totalItems = this.cart.reduce((total, product) => total + product.quantity, 0);
    this.totalItemsSubject.next(totalItems);
  }
}
