import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Category{
  
  id:number;
  category:string;
  mealList: [];
}
const CATEGORY_API = `${environment.baseUrl}/api` ;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getALlMeals(){
    return this.httpClient
        .get<Category[]>(`${CATEGORY_API}/categories`);
  }

}
