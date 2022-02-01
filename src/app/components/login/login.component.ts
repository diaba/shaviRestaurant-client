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
  username = ''
  password = ''
  invalidLogin = false;
  
  
  @Input() error: string | null | undefined;
  constructor(private router: Router,
    private loginService:LoginService, private tokenStorage: TokenStorageService) { }

    ngOnInit(): void {
      if (this.tokenStorage.getToken()) {
        this.invalidLogin = true;
      }
    }
  
    checkLogin(): void {
   
  
      this.loginService.login(this.username, this.password).subscribe(
        data => {
          this.tokenStorage.saveToken(data.jwt);
          this.tokenStorage.saveUser(data);
  console.log("data: "+data.accessToken);
  
          this.invalidLogin = false;
      
          this.router.navigate(['/']);
        },
        err => {
          this.error = err.error.message;
          this.invalidLogin = true;
        }
      );
    }
  
 
  }
  