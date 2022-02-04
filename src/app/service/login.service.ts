import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

const AUTH_API = `${environment.baseUrl}/auth/users/` ;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  constructor(private http: HttpClient, private router: Router) {

  }
  setLoggedIn(state: boolean) { this.loggedIn.next( state); }
  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
    
  }

  register(firstName: string, lastName: string, address: string,phone:string, password: string, email: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
     firstName,
     lastName,
     address,
     phone,
     password,
      email
    }, httpOptions);
  }
  
  
  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
