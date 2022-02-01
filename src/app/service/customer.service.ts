import { Customer } from './../model/Customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const CUSTOMER_API = `${environment.baseUrl}/api/customers` ;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }
  getCustomer(){
    return this.httpClient
        .get<Customer>(`${CUSTOMER_API}`);
  }
}
