import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

// }
// cart!:Cart;
//   constructor(private cartService: CartService) { 
//     this.setCart();
//   }
//   ngOnInit(): void {
//   }

//   removeFromCart(cartItem:CartItem){
//     this.cartService.removeFromCart(cartItem.food.id);
//     this.setCart();
//   }

//   changeQuantity(cartItem:CartItem, quantityInString:string){
//     const quantity= parseInt(quantityInString);
//     this.cartService.changeQuantity(cartItem.food.id, quantity);
//     this.setCart();
//   }

//   setCart(){
//     this.cart = this.cartService.getCart();
}