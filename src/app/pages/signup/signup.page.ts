import { Component, OnInit } from '@angular/core';
import { Users } from '../../../app/User';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user =  {} as Users;
  
  constructor() { }
  createRegister(user: Users) {

    
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((result) => {
     
    }).catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      // Handle Errors here.
      let alert = this.alertCtrl.create({
        title: errorCode,
        subTitle: errorMessage,
        buttons: ['Try Again'],
    })
    alert.present();
      
      // ...
    });

  }

  ngOnInit() {
  }

}
