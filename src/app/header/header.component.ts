import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge'
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ShoppingService } from '../shopping.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule, RouterLink, RouterLinkActive,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  itemsInCart : number = 0
  hidden = false;
  ImagePath: string;

  constructor(private shoppingService: ShoppingService) {}
  ngOnInit() {
    this.shoppingService.cart$.subscribe(() => {
      this.itemsInCart = this.shoppingService.getTotalProducts()
    })
  }
}
