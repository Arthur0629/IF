import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from '../services/database.service';
import { Info } from '../models/info';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


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

}
