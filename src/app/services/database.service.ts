import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

 
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  snapshotChangesSubscription: any;
  
 
  constructor(
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth
  ){}
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
}