import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlowerService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  product: Product | undefined;
  currentUrl: string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: FlowerService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = +params.get('id')!;
      this.product = this.productService.getProductById(productId)
    })
    this.currentUrl = this.router.url
  }
}
