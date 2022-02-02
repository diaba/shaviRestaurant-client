import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
        this.isLoggedIn = true;
      }
    }
  
    checkLogin(): void {
      const { username, password } = this.form;
  
      this.loginService.login(username, password).subscribe(
        data => {
          this.tokenStorage.saveToken(data.jwt);
          this.tokenStorage.saveUser(data);
          this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
  
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
 
  }
  