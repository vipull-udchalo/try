import { Component } from '@angular/core';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth'
import { UpdateInfoService } from './update-info.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase';
  constructor(private updateservice:UpdateInfoService)
  {
      updateservice.checkupdate();
  }
}
