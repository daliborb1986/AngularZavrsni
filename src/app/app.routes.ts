import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      {
        path: 'category/:category',
        component: CategoryComponent,
        children: [{ path: 'product/:id', component: ProductComponent }],
      },
    ],
  },
];
