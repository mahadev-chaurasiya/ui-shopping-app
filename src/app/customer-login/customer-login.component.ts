import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
  userName: string = "";
  password: string = "";

  customerLogin(){
    if(this.userName === "mahadev@chaurasiya.com" && this.password === "Mahadev"){
      alert("Login success");
    }else{
      alert("Login Failed");
    }
  }
}
