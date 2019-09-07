import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  userRefList: AngularFireList<any>;    // Reference to Student data list, its an Observable
  userRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

  constructor(
    private navCtrl: NavController,
    public router: Router,
    private db: AngularFireDatabase
  ) {}

  ngOnInit(){
    this.userRef = this.db.object('/user/wvditpG4XrZ5KQvkpYcUNs2GRJs2');

    this.userRef.set({
      firstName: "dfd",
      lastName: "fefe",
      email: "my@email.com",
      mobileNumber: "21212"
    });
  }

  onUpdateProfile(){
    this.navCtrl.navigateForward('/profile')
  }

  onCheckDetails(){
    this.navCtrl.navigateForward('/details');
  }

  onTestReadData(){

  }

}
