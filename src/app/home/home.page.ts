import { Component } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, LoadingController} from '@ionic/angular';
import { Info } from '../models/info';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
  
  BacktoDash(){
    this.router.navigateByUrl('dashboard');
  }
  edit(){
    this.router.navigateByUrl('update-profile');
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