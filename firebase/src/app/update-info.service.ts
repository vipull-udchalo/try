import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateInfoService {

  constructor(private update:SwUpdate,private snack:MatSnackBar) {
    if(!update.isEnabled)
    {
      console.log("service worker is not enabled");
    }
   }
  public checkupdate()
   {
     this.update.available.subscribe(()=>{
       this.promptUser();
     })
   }

  private  promptUser():void{
     let snackbar = this.snack.open('An update is available','Reload',{duration:10*1000});
     snackbar.onAction().subscribe(()=>{
       this.update.activateUpdate().then(()=>window.location.reload());
     })
   }
}
