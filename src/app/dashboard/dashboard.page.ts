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


  userEmail: string;
  constructor(
    private navCtrl: NavController,
    public router: Router,
    private authService: AuthenticateService
  ) {}

  ngOnInit(){
    

  }

  onUpdateProfile(){
    this.navCtrl.navigateForward('/profile')
  }

  onCheckDetails(){
    this.navCtrl.navigateForward('/details');
  }

}
