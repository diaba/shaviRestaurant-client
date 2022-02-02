import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
  static getALlMeals() {
      throw new Error("Method not implemented.");
  }


  constructor(private httpClient: HttpClient) { }

  // getALlMeals():Observable<Meal[]> {
  //   return this.httpClient
  //       .get(`${MEAL_API}`)
  //       .subscribe((res: Response) => res.json().response.map((meal: Meal) => new Meal().deserialize(meal)))
        
  //     };
  // }
  getALlMeals(){
    return this.httpClient
        .get<Meal[]>(`${MEAL_API}/meals`);
  }

  getSpecialMeal(){
    return this.httpClient
        .get<Meal[]>(`${MEAL_API}/categories/1`);
    
  }
  // getMeal(id: number){
  //   return this.httpClient
  //   .get<Meal>(`${MEAL_API}/${id}` );
  // }
 
}

