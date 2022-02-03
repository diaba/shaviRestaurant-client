import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Order{
  id: number;
  mealId: number;
  quantity : number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url: string = `${environment.baseUrl}/api/orders`;
  constructor(private http: HttpClient) { }

  // createOrder(): Observable<Order> {
  //   return this.http.post<Order>(this.url, {})
  //     .pipe(catchError(this.eh.handleError));
  // }

  getOrder(id: string ): Observable<Order> {
    return this.http.get<Order>(`${this.url}/${id}`)  
  }

  updateOrder(order: Order): Observable<Order> {

    return this.http.post<Order>(
      `${this.url}/${order.id}`,
      order
    )
      .pipe();
  }



}
