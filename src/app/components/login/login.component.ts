import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
   isLoginFailed = false;
  errorMessage = '';

  
  @Input() error: string | null | undefined;
  constructor(private router: Router,
    private loginService:LoginService, private tokenStorage: TokenStorageService) { }

    ngOnInit(): void {
      if (this.tokenStorage.getToken()) {
        this.setLog(true);
      }
    }
  getUserEmail(){
    return this.form.username;
  }

    checkLogin(): void {
      const { username, password } = this.form;
  
      this.loginService.login(username, password).subscribe(
        data => {
          this.tokenStorage.saveToken(data.jwt);
          this.tokenStorage.saveUser(data);
          this.tokenStorage.saveUser(data);
        this.loginService.setLoggedIn(true);
        this.isLoginFailed = false;
        this.setLog(true);
  
        this.reloadPage();
      
          this.router.navigate(['/']);
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    }
    reloadPage(): void {
      window.location.reload();
    }
    setLog( islog: boolean): void {
        this.isLoggedIn = islog;
    }
 isSuLoggedIn(): boolean {
   return this.isLoggedIn;
 }
  }
  