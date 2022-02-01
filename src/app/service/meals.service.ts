import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export class Meal{
  constructor( 
    public id:number,
  public name:string,
  public serving:string,
 public imageUrl:string,
  public price:number,
  public orderList:{}){

  }
}
const MEAL_API = `${environment.baseUrl}/api/meals/` ;

@Injectable({
  providedIn: 'root'
})
export class MealsService {


  constructor(private httpClient: HttpClient) { }
  getALlMeals(){
    return this.httpClient
        .get<Meal[]>(`{MEAL_API}`);
  }
 
}
