import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/Customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  customer!: Customer; 
  currentUser:any;
  constructor( private httpClient: HttpClient, private customService: CustomerService) { }
   
  ngOnInit(): void {
    this.getProfile();
    // this.customService.getProfile().subscribe((res: Customer) => {
    //   this.currentUser = res;
    //   console.log("user"+ this.currentUser);
      
  // });
}

  getProfile(){
   return this.customService
              .getProfile()
              .subscribe((response) =>{
                this.currentUser = response;
                console.log(response);
              });
  }
  
}

