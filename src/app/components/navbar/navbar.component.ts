import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { LoginService } from '../../service/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   isLoggedIn: boolean = true;
  constructor( private login: LoginComponent, private tokenStorage : TokenStorageService, private test:LoginComponent) { }

  ngOnInit(): void {
     //this.isLoggedIn = this.login.isSuLoggedIn();
    console.log(this.isLoggedIn);
    
  }
  logout(){
    this.test.setLog(false);
    this.tokenStorage.signOut();
  }

}
