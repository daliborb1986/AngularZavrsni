import { Routes, CanActivate, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { AboutComponent } from './about/about.component';
import { authGuard } from './auth.guard';

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
  { path: 'shop/:category/:id', component: ProductComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'productOrder', component: ProductOrderComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];
