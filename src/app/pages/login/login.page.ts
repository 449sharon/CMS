import { Component, OnInit } from '@angular/core';
import { Users } from '../../../app/User';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {} as Users;

  constructor() { }
  login(user: Users) {
  

   

 

    firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((result) => {
      
        
    }).catch((error) => {  
      let errorCode = error.code;
      let errorMessage = error.message;
     
     
    });

  }

  ngOnInit() {
  }



}
