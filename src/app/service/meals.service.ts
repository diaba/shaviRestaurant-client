import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
@Injectable({
  providedIn: 'root'
})
export class MealsService {
URL:string ="http://localhost:8080/api/meals";

  constructor(private httpClient: HttpClient) { }
  getALlMeals(){
    return this.httpClient
        .get<Meal[]>("http://localhost:8080/api/meals");
  }
  // getEmployees() {
  //   return this.httpClient.get<Employee[]>("http://localhost:8080/employees");
  // }
}
