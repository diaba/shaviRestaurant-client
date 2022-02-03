import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LoginService } from 'src/app/service/login.service';
import { Meal, MealsService } from 'src/app/service/meals.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import {FOODS} from './foods'

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  id: string = '';
  quantity: number = 0;
 
  meal: Meal | any;
  meals:any;
  localStorage: any;
  mealId : string|null = '';

  constructor(private mealService: MealsService, private route: ActivatedRoute,
     private cartService: CartService
   ) { }

  ngOnInit(): void { 
  //   console.log("FoodComponent...........");
  // this.getMeals();
  // // save to local storage
  // console.log("Meals........"+this.meals);
  // // get met by id

  this.meals = this.mealService.getALlMeals();
  this.route.paramMap.subscribe(param => {// deal with the id parameter
    
    this.mealId = param.get('id');

    // find by index
    this.meal = FOODS.find(j => {
        const paramId:string = param.get('mealId') || '';
        return j.id === parseInt(paramId)
      });
      console.log("Meal Details: city"+this.meal.id);
    
})
  
}

  addToCart(meal: Meal) {
    this.cartService.addToCart(meal);
    console.log("Cart...."+meal.name);
    
    window.alert('Your meal has been added to the cart!');
  }
  

  
//   // meal/:mealId

// getMealById(id :string){
//   console.log("GET MEAL BY Id");
//   console.log("ID "+id);
  
  
//   this.mealService.getMeal(parseInt(id)).subscribe(
//     (x) => {console.log(" Response get meal by id "+ x)
//     }
//   )
// }

//   getMealFromLocalStorage(){
//     return this.localStorage.getFoods();
//   }

// getMeals(){
//   this.mealService.getALlMeals().subscribe(
//     response => {
      
//       this.meals = response
//       console.log("Meals : "+this.meals);
    
//     }
//   );

//   }
}

