import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor(private cartService: CartService, private http: HttpClient) {}

  changeQuantity(cartItem: Meal, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.id, quantity);
  }
  removeFromCart(meal: Meal) {
    this.cartService.removeFromCart(meal.id);
    // refresh the cart
    this.items = this.cartService.getItems();
  }
  ngOnInit(): void {
    console.log('Cart component => items in cart' + this.items.length);
  }
}
