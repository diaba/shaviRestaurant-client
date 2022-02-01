import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal, MealsService } from './../../service/meals.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
meals:Meal[] | undefined;

  constructor(
    private mealsService:MealsService) { }

  ngOnInit(): void {
    console.log("HomeComponent..............");
    
    this.mealsService.getALlMeals().subscribe(
      response => {
        
        this.meals = response
        console.log("Meals : "+this.meals);
      
      }
    );
    
  }

}
