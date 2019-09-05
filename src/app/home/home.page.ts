import { Component } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name:any;

  constructor(
    private navCtrl: NavController,
    public router: Router,
    private authService: AuthenticateService
  ) {}

  ngOnInit() {
    
  }
  BacktoDash(){
    this.router.navigateByUrl('dashboard');
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