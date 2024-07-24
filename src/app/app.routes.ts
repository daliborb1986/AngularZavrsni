import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      {
        path: ':category',
        component: CategoryComponent,
      },
    ],
  },
  { path: 'shop/:category/:title', component: ProductComponent },
  {path: 'shoppingCart', component: ShoppingCartComponent},
  {path:'login', component: LoginComponent},
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
  
];
