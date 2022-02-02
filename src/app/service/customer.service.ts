import { Customer } from './../model/Customer';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/service/token-storage.service';

const CUSTOMER_API = `${environment.baseUrl}/api/customers` ;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private serviceUrl = 'http://localhost:8080/api/customerByEmail/mnesa4@gnjg.tt'

  constructor(private httpClient: HttpClient, private token: TokenStorageService) { }
  getCustomer(){
    return this.httpClient
        .get<Customer>(`${CUSTOMER_API}`);
  }
  getProfile():Observable<Customer>{
    // const headers = new Headers();
    // headers.append('authentication1', token.get) 
    return this.httpClient
    .get<Customer>(`${this.serviceUrl}`
    // ,{ headers: {'authorization': this.token.getToken()}} 
  )
  }
  
}
