import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   isLoggedIn: boolean = false;
  constructor( private login: LoginComponent) { }

  ngOnInit(): void {
     this.isLoggedIn = this.login.isSuLoggedIn();
    
  }

}
