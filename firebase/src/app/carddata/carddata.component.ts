import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-carddata',
  templateUrl: './carddata.component.html',
  styleUrls: ['./carddata.component.css']
})
export class CarddataComponent implements OnInit {

  products:any;
  constructor(public serv:AuthService,private db:AngularFirestore) { 
    this.db.collection('products').valueChanges().subscribe(val=>{
      this.products=val;
      // console.log(val);
      // console.log(this.products[0].name);
    })
  }

  ngOnInit(): void {
  }

}
