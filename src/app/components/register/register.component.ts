import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = ''
  password = ''
  firstName = ''
  lastName = ''
  address = ''
  phone = ''
  
  @Input() error: string | null | undefined;
  invalidLogin = false

  constructor(private loginService:LoginService, private router:Router) { }



  ngOnInit(): void {  }
  register() {
    (this.loginService.register(this.firstName,this.lastName,this.address, this.phone, this.password,this.username).subscribe(
      data => {
        console.log(data);
        
        this.router.navigate(['/login'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.error = error.message;

      }
    )
    );

  }


}
