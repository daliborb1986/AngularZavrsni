import { AuthServiceService } from '../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlowerService } from '../services/product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ShoppingService } from '../services/shopping.service';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  product: Product | undefined;
  productsInCategory: Product[];
  currentUrl: string;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: FlowerService,
    private shoppingService: ShoppingService,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('category');
      const id = params.get('id')!;
      if (category) {
        this.productsInCategory =
          this.productService.getProductByCategory(category);
        this.product = this.productService.getProductById(id);

        if (this.product) {
        }
        const productTitle = this.product?.title.replace(/\s+/g, ' ');
        this.currentUrl = `/shop/${category}/${productTitle}`;
      }
    });
  }
  navigateToProduct(index: number): void {
    const newProduct = this.productsInCategory[index];
    this.router.navigate(['/shop', newProduct.categoryId, newProduct.id]);
  }
  previousProduct(): void {
    const currentIndex = this.productsInCategory.findIndex(
      (p) => p.id === this.product?.id
    );
    const previousIndex =
      currentIndex === 0
        ? this.productsInCategory.length - 1
        : currentIndex - 1;
    this.navigateToProduct(previousIndex);
  }
  nextProduct(): void {
    const currentIndex = this.productsInCategory.findIndex(
      (p) => p.id === this.product?.id
    );
    const nextIndex =
      currentIndex === this.productsInCategory.length - 1
        ? 0
        : currentIndex + 1;
    this.navigateToProduct(nextIndex);
  }
  addToCart(): void {
    if (this.authService.isLoggedIn()) {
      if (this.product) {
        this.shoppingService.addToCart(this.product, this.quantity);
      }
    } else {
      const modal = new bootstrap.Modal(
        document.getElementById('registerPromptModal')!
      );
      modal.show();
    }
  }
  onlogin() {
    this.router.navigate(['login']);
  }
}
