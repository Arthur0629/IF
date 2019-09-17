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
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' },
      { type: 'minlength', message: 'Name must be at least 1 characters long.' }
    ],
    'age': [
      { type: 'required', message: 'Age is required.' },
      { type: 'minlength', message: 'Age must be at least 1 characters long.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private dataService: DatabaseService,
    private formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthenticateService
  ) { }

  ngOnInit() {
    this.resetFields();
  }
  resetFields(){
    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.minLength(1),
        Validators.required
      ])),
      age: new FormControl('', Validators.compose([
        Validators.minLength(1),
        Validators.required
      ])),
    });
  }
  get_input(value){
    let data = {
      name: value.name,
      age: value.age
    }
    this.dataService.get_user_details(data)
     .then(res => {
      this.router.navigateByUrl('dashboard');
     })
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
