import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LoginService } from 'src/app/service/login.service';
import { Meal, MealsService } from 'src/app/service/meals.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {


  meal: Meal | undefined;
  meals: Meal[] = [];
  constructor(private mealService: MealsService, private route: ActivatedRoute
   ) { }

  ngOnInit(): void { 
   



    console.log("FoodComponent...........");
  this.getMeals();
  console.log("Meals........"+this.meals);
  
      // First get the meal id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  
  
  const mealIdFromRoute = Number(routeParams.get('mealId'));
  console.log("Route mealIdFromRoute: " + mealIdFromRoute);
  // Find the product that correspond with the id provided in route.

  this.meal = this.meals.find(meal => meal.id === mealIdFromRoute);
   console.log("Meal "+this.meal);
   
  }
getMeals(){
  this.mealService.getALlMeals().subscribe(
    response => {
      
      this.meals = response
      console.log("Meals : "+this.meals);
    
    }
  );
}
  }


