import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) {}
  // Provide username and password for authentication, and once authentication is successful, 
  //store JWT token in session
    register(firstName:string,lastName:string,address:string,phone:string, password:string,email:string,) {
      return this.httpClient
        .post<any>("http://localhost:8080/auth/users/register", {'email': email,'firstName':firstName,'lastName':lastName,'address':address,'phone':phone,'password' : password })
        .pipe(
          map(userData => {
            sessionStorage.setItem("username", email);
            let tokenStr = "Bearer " + userData.token;
            sessionStorage.setItem("token", tokenStr);
            return userData;
          })
        );
    }
  
}
