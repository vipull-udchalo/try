import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  userData:any;
  constructor(private fauth:AngularFireAuth, private router: Router) { 
   

    this.fauth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }


signInWithgithub() {
 
  return this.fauth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  
}
signInWithTwitter() {
 
  return this.fauth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  
}
signInWithGoogle() {
 
 return this.fauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  
}
signInWithFacebook() {
 
 return  this.fauth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  
}
logout() {
  this.fauth.signOut()
  .then((res) => this.router.navigate(['/']));
}
}

