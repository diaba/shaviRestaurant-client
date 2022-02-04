import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FoodComponent } from './components/food/food.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoryComponent } from './components/category/category.component';
import { AuthGuard } from './service/auth.guard';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '', component: HomeComponent , canActivate: [AuthGuard]},
  {path:'menu/:mealId',component: FoodComponent , canActivate: [AuthGuard]},
  {path:'cart',component: CartComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]},
  { path: 'menu', component: MenuComponent , canActivate: [AuthGuard]},
  { path: 'checkout', component: CheckoutComponent , canActivate: [AuthGuard]},
   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
