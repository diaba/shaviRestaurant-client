import { Customer } from './../model/Customer';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { LoginComponent } from '../components/login/login.component';

const CUSTOMER_API = `${environment.baseUrl}/api/customers` ;

 
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private serviceUrl = 'http://localhost:8080/api/customerByEmail/'

  constructor(private httpClient: HttpClient, private token: TokenStorageService, private login: LoginComponent) { }
  getCustomer(){
    return this.httpClient
        .get<Customer>(`${CUSTOMER_API}`);
  }
  getProfile():Observable<Customer>{
    const username = this.login.getUserEmail();
    // const headers = new Headers();
    // headers.append('authentication1', token.get) 
    return this.httpClient
    .get<Customer>(`${this.serviceUrl}${username}`
    // ,{ headers: {'authorization': this.token.getToken()}} 
  )
  }
  updateProfile(customer: Customer):Observable<Customer>{
    return this.httpClient
    .post<Customer>(`${this.serviceUrl}`, customer)

    // { headers: {'authorization': this.token.getToken}})
  }
//   update(user: User) {
//     return this.http.put(`${config.apiUrl}/users/${user.id}`, user);
// }
// getById(id: number) {
//   return this.http.get(`${config.apiUrl}/users/${id}`);
// }

  
}
