import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {Info} from '../models/info';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  Profile_detail: AngularFirestoreCollection<Info>;
  Profile_details: Observable<Info[]>;
  
 
  constructor(
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth
  ){
    
  }
  get_user_details(value)
  {
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.firestore.collection('user').doc(currentUser.uid).collection('details').add({
        name: value.name,
        age: value.age
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })

  }

  show_details(){
    let currentUser = firebase.auth().currentUser;
    this.Profile_details =  this.firestore.collection('user').doc(currentUser.uid).collection('details').valueChanges();
    return this.Profile_details; 
  }
}