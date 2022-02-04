import { Injectable } from '@angular/core';
import { Meal } from './meals.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  addItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  deleteItem(key: string) {
    localStorage.removeItem(key);
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }
  clear() {
    localStorage.clear();
  }
  addFood(meal: Meal) {
    localStorage.setItem(`${meal.id}`, JSON.stringify(meal))
  }
  getFood( ) {
    return localStorage.getItem("foods");
   ///return localStorage.getItem("foods");
  }
}
