import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { AuthenticateService } from '../services/authentication.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Info } from '../models/info';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {
  infos: Info[];

  constructor(
    private navCtrl: NavController,
    public router: Router,
    public loadingCtrl: LoadingController,
    private authService: AuthenticateService,
    private route: ActivatedRoute,
    private dataservice : DatabaseService
  ) {}

  ngOnInit() {
    this.dataservice.show_details().subscribe(infos =>{
      this.infos = infos;
    });
  }


  update(info:Info){
    this.dataservice.update_details(info);
    
  }
  BacktoHome(){
    this.router.navigateByUrl('home');
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

}
