//https://webkul.com/blog/how-to-generate-facebook-app-id/
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ser:AuthService,private router:Router,private afs:AngularFirestore) { }

  ngOnInit(): void {
  }
  setData(user)
  {
   
   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: any = {
      
      email: user.email,
      name: user.displayName,
      photourl: user.photoURL,
      uid:user.uid
     
    }
    console.log(userData);
    return userRef.set(userData, {
     merge: true
     })
  }
  gitlogin()
  {
    this.ser.signInWithgithub().then(user=>{
      this.router.navigate(['dash']);
      console.log("login github");
    })
  }

  fblogin()
  {
    this.ser.signInWithFacebook().then(user=>{
     this.router.navigate(['dash']);
     console.log("login fb");

    },err=>{
      console.log("unable to login",err);
    })
  }
  twitterlogin()
  {
    this.ser.signInWithTwitter().then(user=>{
      this.router.navigate(['dash']);
      console.log("login twitter");
    })
  }
  googlogin()
  {
    this.ser.signInWithGoogle().then(res=>{
      this.router.navigate(['dash']);
      console.log("login google");
      this.setData(res.user);
    })
  }
  
}
