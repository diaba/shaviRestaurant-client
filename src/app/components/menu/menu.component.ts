import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Category, CategoryService } from 'src/app/service/category.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { Meal } from 'src/app/service/meals.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categories:Category[] | undefined; 
  constructor( private categoryService: CategoryService, private cartService: CartService, private storage:LocalStorageService) { }
 
  addToCart(meal: Meal) {
    this.cartService.addToCart(meal);
    
    console.log("Cart...."+meal.name);  
    window.alert('Your meal has been added to the cart!');
  }
  ngOnInit(): void {
    console.log("MenuComponent..............");
    this.categoryService.getALlMeals().subscribe(
      response => {
        this.categories = response
        this.storage.addItem("foods", this.categories.toString())
        console.log("Category : "+this.categories);     
      }
    );
  }

}
