import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  

  constructor(public auth: AuthService ) {

    
   }

  ngOnInit(): void {
  }
  showLogin(){
    this.auth.showRegisterinPage=false;
    this.auth.showLoginPage=true;
  }
  showRegister(){

    this.auth.showRegisterinPage=true;
    this.auth.showLoginPage=false;
  }
  showNav(){
    this.auth.showLoginPage=false;
    this.auth.showRegisterinPage=false;
    this.auth.navFlag=true;
  }
  


}
