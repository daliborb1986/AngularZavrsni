import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FlowerService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FooterComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  category: string;
  products: Product[] = [];

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
