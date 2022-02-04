import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';
import { Meal } from './meals.service';
import { OrderService } from './order.service';
export interface Cart {
  meals: Meal[];
  quantity: number;
}

const CART_API = `${environment.baseUrl}/api/orders`;
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject({
    orderId: this.orderId,
    itemCount: this.itemCount,
  });

  cartValue = this.cart.asObservable();
  items: any[] = [];

  constructor(
    private orders: OrderService,
    private http: HttpClient,
    private storage: LocalStorageService,
    private httpClient: HttpClient
  ) {}

  addToCart(meal: Meal) {
    this.items.push(meal);
    meal.quantity = 1;

    console.log('meal: ' + this.getItems());
  }
  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.items.find(
      (item: { id: number }) => item.id === foodId
    );
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }
  getItems() {
    return this.items;
  }

  removeFromCart(foodId: number): void {
    this.items = this.items.filter((item) => item.id != foodId);
  }

  get orderId(): string {
    const id = this.storage.getItem('order-id');
    return id ? id : '';
  }

  set orderId(id: string) {
    this.storage.addItem('order-id', id);
    this.cart.next({ orderId: id, itemCount: this.itemCount });
  }

  get itemCount(): number {
    const itemCount = this.storage.getItem('item-count');

    return itemCount ? parseInt(itemCount) : 0;
  }

  set itemCount(amount: number) {
    this.storage.addItem('item-count', amount.toString());
    this.cart.next({ orderId: this.orderId, itemCount: amount });
  }

  incrementItemCount(amount: number) {
    this.itemCount = this.itemCount + amount;
  }

  decrementItemCount(amount: number) {
    this.itemCount = this.itemCount - amount;
  }

  clearCart() {
    this.storage.deleteItem('item-count');
    this.items = [];
    return this.items;
  }
}
