import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  
  @Input() error: string | null | undefined;
  constructor(private router: Router,
    private loginservice:LoginService) { }

  ngOnInit(): void {
    
    
  }
  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.error = error.message;

      }
    )
    );
    console.log(this.username);
    console.log(this.invalidLogin);
    console.log(this.password);
  }

}
