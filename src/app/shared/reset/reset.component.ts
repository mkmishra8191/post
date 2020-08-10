import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import{FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  errorMessage:string;
  successMessage:string;

  registerForm = new FormGroup({
    email: new FormControl(''),
    
  });

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
  reset(value){
    this.auth.reset(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Link has been sent to your email address.";
    },
    err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }
}
