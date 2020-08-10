import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import{FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  

  errorMessage:string;
  successMessage:string;

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    
  });

  




  constructor(public auth: AuthService) {

    
   }

  ngOnInit(): void {
  }
  login(value){
    
    this.auth.login(value)
    .then(res => {
      console.log(this.auth.authenticated);
      this.errorMessage = "";
      this.auth.showLoginPage=false;
    },
    err => {
      console.log(this.auth.authenticated);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
    
    
  
  }
  showNav(){
    this.auth.navFlag=false;
  }
}
