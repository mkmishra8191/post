import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import{FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage:string;
  successMessage:string;

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    
  });

  

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
  register(value){
    this.auth.register(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.auth.showRegisterinPage=false;
      
    },
    err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

}
