import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { LoginService } from '../../service/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   isLoggedIn$: Observable<boolean> | undefined;  
  constructor(private loginService: LoginService, login: LoginComponent, private tokenStorage : TokenStorageService, private test:LoginComponent) { }

  ngOnInit(): void {
   this.isLoggedIn$ = this.loginService.isLoggedIn;
  }

  onLogout(){
    this.loginService.logout();                     
  }

}
