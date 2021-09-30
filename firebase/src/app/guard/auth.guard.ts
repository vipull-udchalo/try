import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {



  
  constructor(private afauth:AngularFireAuth,private router:Router){}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    //console.log(this.afauth.currentUser);
    const user = await this.afauth.currentUser;
    const isauth = user ?true:false;
    if(!isauth)
    {
      alert("need to login first");
      this.router.navigate(['/']);
      return false;

    }
    return true;
  }
  
}
