import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { Meal, MealsService } from './../../service/meals.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
meals:Meal[] | undefined;  

addToCart(meal: Meal) {
  this.cartService.addToCart(meal);
  console.log("Cart...."+meal.name);
  
  window.alert('Your meal has been added to the cart!');
}
  constructor(
    private mealsService:MealsService  , private cartService: CartService) { }

  ngOnInit(): void {
    console.log("HomeComponent..............");
    
    this.mealsService.getSpecialMeal().subscribe(
      response => {
        
        this.meals = response
        console.log("Meals : "+this.meals);
      
      }
    );
    
  }

}
