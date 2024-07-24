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

  constructor() {}
  addToCart(product: Product) {
    const existingProduct = this.cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity + 1;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }
    this.cartSubject.next(this.cart);
  }
  getCart(): Product[] {
    return this.cart;
  }
  removeFromCart(product: Product) {
    const index = this.cart.findIndex((p) => p.id === product.id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
  getTotalProducts(): number {
    return this.cart.reduce((total, product) => total + product.quantity, 0);
  }
  clearCart() {
    this.cart = [];
  }
}
