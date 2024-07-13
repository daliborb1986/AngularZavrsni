import { Component } from '@angular/core';
import { Flower } from '../flowers';
import { FlowerComponent } from '../flower/flower.component';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    FlowerComponent,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class HomeComponent {
  flowers: Flower[] = [
    {
      id: 1,
      title: 'Fiesta Bouquet',
      currency: '$',
      price: 60,
      imgSrc: '/assets/flower1.jpeg',
    },
    {
      id: 2,
      title: 'Alluring Elegance Bouquet',
      currency: '$',
      price: 72,
      imgSrc: '/assets/flower2.jpeg',
    },
    {
      id: 3,
      title: 'Beyond Blue Bouquet',
      currency: '$',
      price: 55,
      imgSrc: '/assets/flower3.jpeg',
    },
    {
      id: 4,
      title: 'Mixed Roses',
      currency: '$',
      price: 35,
      imgSrc: '/assets/flower4.jpeg',
    },
    {
      id: 5,
      title: 'Belle of the Ball Bouquet',
      currency: '$',
      price: 45,
      imgSrc: '/assets/flower5.jpeg',
    },
    {
      id: 6,
      title: 'Rainbow Garden',
      currency: '$',
      price: 50,
      imgSrc: '/assets/flower6.jpeg',
    },
    {
      id: 7,
      title: 'Best Day Bouquet',
      currency: '$', 
      price: 61,
      imgSrc: '/assets/flower7.jpeg',
    },
    {
      id: 8,
      title: 'Smiles & Sunshine',
      currency: '$',
      price: 45,
      imgSrc: '/assets/flower8.jpeg',
    },
  ];
  ImagePath: string;
  ImagePathHeader: string;

  constructor(private router: Router) {
    this.ImagePathHeader = '/assets/flowerBackground1.jpg'
    this.ImagePath = '/assets/FTD_SplitBanner_Merx_1.png';
  }
  onLoadShop() {
    this.router.navigate(['/shop']);
  }
}
