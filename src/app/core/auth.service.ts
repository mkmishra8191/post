import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app'

@Injectable()
export class AuthService {
  authState: any = null
  showLoginPage:boolean;
  showRegisterinPage:boolean;
  navFlag:boolean;
  


  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(data => this.authState = data)
    this.showLoginPage=false;
    this.showRegisterinPage=false;
    this.navFlag=true;
  }

  get authenticated(): boolean {
    return this.authState !== null
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null
  }

  loginGoogle() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    this.showLoginPage=false;
    this.showRegisterinPage=false;
    this.navFlag=true;
    
  }
  login(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    }) 
  }
  reset(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(value.email)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    }) 
  }
  register(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    }) 
  }
  logout() {
    this.afAuth.signOut()
    this.navFlag=true;
  }
  
  
}
