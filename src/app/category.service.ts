import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  private categories: Category[] = [
    new Category('1', 'Sympathy', '/assets/category/category1.png'),
    new Category('2', 'Anniversary', '/assets/category/category2.png'),
    new Category('3', 'Congratulations', '/assets/category/category3.png'),
    new Category('4', 'GetWell', '/assets/category/category4.png'),
  ];
  getCategories(): Category[] {
    return this.categories;
  }
}