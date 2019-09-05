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
    
    this.init()
  }
  
  init(){
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
  }

  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }

  goto_home(){
    this.router.navigateByUrl("home")
  }
  goto_profile(){
    this.router.navigateByUrl('profile');
  }
}
