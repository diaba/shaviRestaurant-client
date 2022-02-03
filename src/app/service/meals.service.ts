import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FOODS } from '../components/food/foods';

export interface Meal{
  
   id:number;
   name:string;
   serving:string;
   imageUrl:string;
   price:number;
   quantity:number;
   orderList:{};
  }

const MEAL_API = `${environment.baseUrl}/api` ;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  constructor(private httpClient: HttpClient) { }

  // getALlMeals():Observable<Meal[]> {
  //   return this.httpClient
  //       .get(`${MEAL_API}`)
  //       .subscribe((res: Response) => res.json().response.map((meal: Meal) => new Meal().deserialize(meal)))
        
  //     };
  // }
  getAllFoodByKeyword(keyword: string | null): any[] {
    if (!keyword) {
      return [];
    }
    return this.getALlMeals()
      .map((meal: any) => meal.name)
      .flat()
      .filter(
        (meal: any) =>
          meal.name.toLowerCase().includes(keyword.toLowerCase()) 
      );
  }
  getALlMeals(): any{
    return FOODS;
  }
  // getALlMeals(){
  //   return this.httpClient
  //       .get<Meal[]>(`${MEAL_API}/meals`);
  // }

  // getSpecialMeal(){
  //   return this.httpClient
  //      // .get<Meal[]>(`${MEAL_API}/categories/1`);
    
  // }
  // getMeal(id: number){
  //   return this.httpClient
  //   .get<Meal>(`${MEAL_API}/meals/${id}` );
  // }
 
}

