import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  itemsInCart : number = 0
  hidden = false

  ImagePath: string;

  constructor() {
    this.ImagePath = '/assets/flowerBackground1.jpg'
  }
  ngOnInit() {}
}
