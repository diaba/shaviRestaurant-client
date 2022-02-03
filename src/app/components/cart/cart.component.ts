import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { Meal } from 'src/app/service/meals.service';
import { Order, OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  totalPrice: number | undefined;
  order: Order = {
    id: 0,
    mealId: 0,
    quantity: 1
  };
  items: Meal[] = this.cartService.getItems();
  summary: { name: string, amount: string | undefined, id: string }[] = [];

  constructor(private cart: CartService,private router: Router, private orders: OrderService,private cartService: CartService, private http: HttpClient) {}

  changeQuantity(cartItem: Meal, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.id, quantity);
    this.getTotal();
  }
  removeFromCart(meal: Meal) {
   // this.cartService.removeFromCart(meal.id);
    // refresh the cart
    this.items = this.cartService.getItems();
    // refresh balanced
    this.getTotal();
  }
  ngOnInit(): void {
    this.getTotal();
    
    this.orders.getOrder(this.cart.orderId)
      .subscribe(
        order => this.processOrder(order)
      );

  }
  private processOrder(order: Order) {

    this.order = order;

  }
  checkout() {
    //create order object
    
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted');
    this.router.navigateByUrl('/');

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
