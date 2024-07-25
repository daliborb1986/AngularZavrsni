import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlowerService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ShoppingService } from '../shopping.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  product: Product | undefined;
  productsInCategory: Product[];
  currentUrl: string;
  quantity: number = 1

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: FlowerService,
    private shoppingService: ShoppingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('category');
      const encodedTitle = params.get('title');
      if (category && encodedTitle) {
        const title = encodedTitle.replace(/-/g, ' ');
        this.productsInCategory =
          this.productService.getProductByCategory(category);
        this.product = this.productService.getProductByTitle(title);

        this.currentUrl = this.router.url;
      }
    });
  }
  navigateToProduct(index: number): void {
    const newProduct = this.productsInCategory[index];
    this.router.navigate([
      '/shop',
      newProduct.categoryId,
      newProduct.title.replace(/\s+/g, '-'),
    ]);
  }
  previousProduct(): void {
    const currentIndex = this.productsInCategory.findIndex(
      (p) => p.title === this.product?.title
    );
    const previousIndex =
      currentIndex === 0
        ? this.productsInCategory.length - 1
        : currentIndex - 1;
    this.navigateToProduct(previousIndex);
  }
  nextProduct(): void {
    const currentIndex = this.productsInCategory.findIndex(
      (p) => p.title === this.product?.title
    );
    const nextIndex =
      currentIndex === this.productsInCategory.length - 1
        ? 0
        : currentIndex + 1;
    this.navigateToProduct(nextIndex);
  }
  addToCart() {
    if(this.product){
      this.shoppingService.addToCart(this.product, this.quantity)
    }
  }
}
