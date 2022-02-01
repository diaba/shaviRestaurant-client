import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meal } from './meals.service';
export interface CartItem{
  meals: Meal;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  items :Meal[]=[];  // items in the cart
  meals: Meal[] = [];
  cart: CartItem[] | undefined; // model of our cart
//   /* . . . */
  
    addToCart(meal: Meal) {
      this.items.push(meal);
      meal.quantity = 1;
      console.log("meal: "+this.getItems());

    }
    changeQuantity(foodId:number, quantity:number){
    let cartItem = this.items.find(item => item.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
    
  }
    getItems() {
      return this.items;
    }
  
//     clearCart() {
//       this.meals = [];
//       return this.meals;
//     }
// }
// items :Meal[]=[];
// CartItem :{ meal: Meal; quantity: number; } | undefined 
//   addToCart(meal: Meal):void{
//     let cartItem = this.items.find(item => item.id === meal.id);
//     if(cartItem){
//       this.changeQuantity(meal.id, cartItem.quantity + 1);
//       return;
//     }
//     this.items.push(new CartItem(meal));
//   }

  removeFromCart(foodId:number): void{
    this.items = 
    this.items.filter(item => item.id != foodId);
  }



  // getCart():CartItem[]{
  //   return this.cart;
  // }
}