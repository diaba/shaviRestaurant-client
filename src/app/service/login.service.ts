import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}
  // Provide username and password for authentication, and once authentication is successful, 
  //store JWT token in session
    authenticate(username:string, password:string) {
      return this.httpClient
        .post<any>("http://localhost:8080/auth/users/login", {'email': username, 'password': password })
        .pipe(
          map(userData => {
            sessionStorage.setItem("username", username);
            let tokenStr = "Bearer " + userData.token;
            sessionStorage.setItem("token", tokenStr);
            return userData;
          })
        );
    }
  
}
