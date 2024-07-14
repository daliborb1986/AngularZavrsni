import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../product.service';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { Product } from '../product';
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;
  products: Product[];

  constructor(
    private categoryService: CategoryService,
    private productService: FlowerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    this.route.paramMap.subscribe(params => {
      const categoryName = params.get('category')
      if(categoryName) {
        this.selectCategoryByName(categoryName)
      }
      else {
        this.selectCategory(this.categories[0])
      }
    })
  }

  selectCategory(category: Category): void {
    console.log('Selected Category:', category);
    this.router.navigate(['/shop', category.name.toLowerCase()])
  }
  selectCategoryByName(categoryName: string): void {
    const category = this.categories.find(c => c.name.toLowerCase() === categoryName.toLowerCase())
    if(category) {
      this.selectedCategory = category;
      this.products = this.productService.getProductByCategory(category.id);
    }
  }
}

