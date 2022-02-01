import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { Meal } from 'src/app/service/meals.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Meal[] = this.cartService.getItems();
  cart!: [];
  totalPrice: number | undefined;
  // totalPrice: Observable<number> | undefined;
  constructor(private cartService: CartService, private http: HttpClient) {}

  changeQuantity(cartItem: Meal, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.id, quantity);
    this.getTotal();
  }
  removeFromCart(meal: Meal) {
    this.cartService.removeFromCart(meal.id);
    // refresh the cart
    this.items = this.cartService.getItems();
    // refresh balanced
    this.getTotal();
  }
  ngOnInit(): void {
    console.log('Cart component => items in cart' + this.items.length);
    this.getTotal()

  }
getTotal(){
  console.log("Get total.......");
let total = 0;
for(let i of this.items){
  total = i.quantity * i.price + total;
  
}
this.totalPrice = total;

}

}
