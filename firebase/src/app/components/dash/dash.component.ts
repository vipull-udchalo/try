import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  
  constructor(public serv:AuthService,private db:AngularFirestore) { 
    this.db.collection('products').valueChanges().subscribe(val=>{
      this.products=val;
      // console.log(val);
      // console.log(this.products[0].name);
    })
  }
  products:any;
  ngOnInit(): void {

   

  }


  logout()
  {
    this.serv.logout();
    
   
  }
}
