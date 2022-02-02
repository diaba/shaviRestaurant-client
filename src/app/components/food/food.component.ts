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

mealIndex: string | null ='';
  meal: Meal | undefined;
  meals: Meal[] = [];
  constructor(private mealService: MealsService, private route: ActivatedRoute
   ) { }

  ngOnInit(): void { 
    console.log("FoodComponent...........");
  this.getMeals();
  console.log("Meals........"+this.meals);
  
  this.route.paramMap.subscribe((params) => {
    this.mealIndex = params.get('mealId')
    this.meal = this.meals.find((x) =>{
      const paramCID: string = params.get('mealId') || '0';
      return x.id === parseInt(paramCID)
    })
  })

  }

  
  // meal/:mealId



  

getMeals(){
  this.mealService.getALlMeals().subscribe(
    response => {
      
      this.meals = response
      console.log("Meals : "+this.meals);
    
    }
  );
}
  }


