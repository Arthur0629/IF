import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  myProfile:any;
  mateProfile:any;

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
    // 把localstorage 中的内容读取，与myProfile 比较
    var zhangsan: any = new Object();
    zhangsan.name = " zhangsan ";
    zhangsan.dob = " 01/01/1982";
    zhangsan.gender = "male";
    zhangsan.swmming = true;
    zhangsan.baskball = true;

    var xiaohong: any = new Object();
    xiaohong.name = "xiaohong";
    xiaohong.dob = "01/01/1981";
    xiaohong.gender = "Female";
    xiaohong.swmming = true;
    xiaohong.baskball = true;


    this.myProfile = zhangsan;
    this.mateProfile = xiaohong;


  }


  goDashboard(){
    this.navCtrl.navigateForward("/dashboard");

  }
  
}
