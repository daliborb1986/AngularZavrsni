import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {}

  cartProducts: Product[] = [];
  totalPrice: number = 0;
  shippingCost: number = 0;

  ngOnInit(): void {
    this.shoppingService.cart$.subscribe((products) => {
      this.cartProducts = products;
      this.calculateTotalPrice();
    });
  }
  calculateTotalPrice():void {
    this.totalPrice = this.cartProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    this.shippingCost = this.totalPrice > 100 ? 0 : 100;
  }
  onQuantityChange(product:Product, quantity: number):void {
    product.quantity = quantity;
    this.shoppingService.updateProductQuantity(product.id, quantity).subscribe(() => {
      this.calculateTotalPrice();
    })
  }

  getTotalProducts() {
    return this.shoppingService.getTotalProducts();
  }
  removeFromCart(product: Product) {
    this.shoppingService.removeFromCart(product);
  }
}
