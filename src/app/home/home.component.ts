import { Component } from '@angular/core';
import { Flower } from '../flowers';
import { FlowerComponent } from '../flower/flower.component';
import { CommonModule } from '@angular/common';

import {ChangeDetectionStrategy} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [FlowerComponent, CommonModule,MatFormFieldModule, MatInputModule, MatSelectModule],
})
export class HomeComponent {
  flowers: Flower[] = [
    {
      id: 1,
      title: 'Fiesta Bouquet',
      price: '$60',
      imgSrc: '/assets/flower1.jpeg',
    },
    {
      id: 2,
      title: 'Alluring Elegance Bouquet',
      price: '$72',
      imgSrc: '/assets/flower2.jpeg',
    },
    {
      id: 3,
      title: 'Beyond Blue Bouquet',
      price: '$55',
      imgSrc: '/assets/flower3.jpeg',
    },
    {
      id: 4,
      title: 'Mixed Roses',
      price: '$35',
      imgSrc: '/assets/flower4.jpeg',
    },
    {
      id: 5,
      title: 'Belle of the Ball Bouquet',
      price: '$45',
      imgSrc: '/assets/flower5.jpeg',
    },
    {
      id: 6,
      title: 'Rainbow Garden',
      price: '$50',
      imgSrc: '/assets/flower6.jpeg',
    },
    {
      id: 7,
      title: 'Best Day Bouquet',
      price: '$61',
      imgSrc: '/assets/flower7.jpeg',
    },
    {
      id: 8,
      title: 'Smiles & Sunshine',
      price: '$45',
      imgSrc: '/assets/flower8.jpeg',
    },
  ];
  constructor() {}
}
