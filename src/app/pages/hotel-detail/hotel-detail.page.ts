import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { transpoter } from '../../../app/Environment';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.page.html',
  styleUrls: ['./hotel-detail.page.scss'],
})
export class HotelDetailPage implements OnInit {
  bookings = [];
  ref = firebase.database().ref('book/');

  constructor() {

    this.ref.on('value', res => {
      this.bookings = transpoter(res);
    })
    // var user = firebase.auth().currentUser;
    // if(user) {
    //     this.ref.child('book').orderByChild('userID').equalTo(user.uid).on('value', resp => {
    //   //  if(firebase.auth().currentUser.email  ){
    //       this.bookings = transpoter(resp);
    //      // this.tbl = resp.val().key.booker;
    //       console.log(resp.val());
  
    //   //  }
  
  
    //     })
    // }else {

    // }
  
  
  }

  ngOnInit() {
  }

}
