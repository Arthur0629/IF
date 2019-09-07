import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userInfo:any;

 

  constructor(
    private navCtrl: NavController,
    private dataService: DatabaseService,
    private formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthenticateService
  ) { }


  ngOnInit() {

    var zhangsan:any = new Object();
    zhangsan.name = "xiaohong";
    zhangsan.dob = "01/01/1981";
    zhangsan.gender = "Female";
    zhangsan.swmming = true;
    zhangsan.baskball = true;
    
    
    this.userInfo = zhangsan;
  }
  
  onClickUpdateProfile( _isUpdate ){

    if( _isUpdate ){ // talk to server to update

    }

    this.navCtrl.navigateForward("/dashboard");

  }

}
