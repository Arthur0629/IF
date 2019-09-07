import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
=======
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from '../services/database.service';
import { Info } from '../models/info';
>>>>>>> 10a60097509ad59cde6542cd2deb576756c99a00


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  userRefList: AngularFireList<any>;    // Reference to Student data list, its an Observable
  userRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

<<<<<<< HEAD
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
=======
  userEmail: string;
  infos: Info[];
  constructor(
    private navCtrl: NavController,
    public router: Router,
    public loadingCtrl: LoadingController,
    private authService: AuthenticateService,
    private route: ActivatedRoute,
    private dataservice : DatabaseService
  ) {}

  ngOnInit(){
    
    this.init();
    this.dataservice.show_details().subscribe(infos =>{
      this.infos = infos;
    });
  }
  
  init(){
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
>>>>>>> 10a60097509ad59cde6542cd2deb576756c99a00
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
