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

  id: string = '';
  quantity: number = 0;
 
  mealIndex: string | null ='';
  meal: Meal | any;
  meals: Meal[] = [];

  constructor(private mealService: MealsService, private route: ActivatedRoute,
     private cartService: CartService
   ) { }

  ngOnInit(): void { 
    console.log("FoodComponent...........");
  this.getMeals();
  // save to local storage
  console.log("Meals........"+this.meals);
  // get met by id
  this.route.paramMap.subscribe((params) => {
    const id :any = params.get('mealId')
    this.meal = this.getMealById(id);
  })


  }

  addToCart(meal: Meal) {
    this.cartService.addToCart(meal);
    console.log("Cart...."+meal.name);
    
    window.alert('Your meal has been added to the cart!');
  }
  

  
//   // meal/:mealId

getMealById(id :string){
  this.mealService.getMeal(parseInt(id)).subscribe(
    (x) => console.log(x)
  )
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

