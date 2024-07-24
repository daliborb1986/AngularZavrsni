import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Product } from '../product';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit {
  cartProduct: Product[] = [];

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.shoppingService.cart$.subscribe((products) => {
      this.cartProduct = products;
    });
  }
  getTotalProducts() {
    return this.shoppingService.getTotalProducts();
  }
}
