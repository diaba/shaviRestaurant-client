import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from 'src/app/service/cart.service';
import { Meal } from 'src/app/service/meals.service';
import { Order, OrderService } from 'src/app/service/order.service';
import { FormBuilder } from '@angular/forms';

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
    quantity: 1,
  };
  items: Meal[] = this.cartService.getItems();
  summary: { name: string; amount: string | undefined; id: string }[] = [];
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  constructor(
    private cart: CartService,
    private formBuilder: FormBuilder,
    private router: Router,
    private orders: OrderService,
    private cartService: CartService,
    private http: HttpClient
  ) {}

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
    this.getTotal();

    this.orders
      .getOrder(this.cart.orderId)
      .subscribe((order) => this.processOrder(order));
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
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.getTotal();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    window.alert(
      'Your order has been submitted check your email for tracking information Thank you!'
    );
    this.checkoutForm.reset();
    // email send to your phone sms to send tracking
    this.router.navigate(['/menu']);
  }

  getTotal() {
    console.log('Get total.......');
    let total = 0;
    for (let i of this.items) {
      total = i.quantity * i.price + total;
    }
    this.totalPrice = total;
  }
}
