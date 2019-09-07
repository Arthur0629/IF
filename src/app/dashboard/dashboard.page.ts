import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  arrayOfItems:any [] = [];



  userEmail: string;
  constructor(
    private navCtrl: NavController,
    public router: Router,
    private authService: AuthenticateService
  ) {}

  ngOnInit(){
    var xiaohong:any = new Object();
    xiaohong.name = "xiaohong";
    xiaohong.dob = "01/01/1981";
    xiaohong.gender = "Female";
    xiaohong.swmming = true;
    xiaohong.baskball = true;

    var xiaoming:any = new Object();
    xiaoming.name = "xiaoming";
    xiaoming.dob = "01/01/1990";
    xiaoming.gender = "Female";
    xiaoming.swmming = false;
    xiaoming.baskball = true;

    var xiaobai:any = new Object();
    xiaobai.name = "xiaohong";
    xiaobai.dob = "01/08/1981";
    xiaobai.gender = "Male";
    xiaobai.swmming = true;
    xiaobai.baskball = false;
    
    var xiaowang:any = new Object();
    xiaowang.name = "xiaohong";
    xiaowang.dob = "01/08/1981";
    xiaowang.gender = "Male";
    xiaowang.swmming = true;
    xiaowang.baskball = false;


    this.arrayOfItems.push( xiaohong);
    this.arrayOfItems.push( xiaoming);
    this.arrayOfItems.push( xiaobai);
    this.arrayOfItems.push( xiaowang);

  }

  onUpdateProfile(){
    this.navCtrl.navigateForward('/profile')
  }

  onCheckDetails(){
    this.navCtrl.navigateForward('/details');
  }

}
