import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlowerService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  category: string;
  products: Product[];

  constructor(
    private route: ActivatedRoute,
    private productService: FlowerService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category')!;
      this.products = this.productService.getProductByCategory(this.category)
    })
  }
}
