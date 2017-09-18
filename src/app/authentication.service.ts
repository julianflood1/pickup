import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; //used for user instance
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app'; //access to firebase
import { Profile } from './profile.model';

@Injectable()
export class AuthenticationService {

  user: Observable<firebase.User>; //current logged-in user
  local: Object;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.user = afAuth.authState;
  }

  createUser(email: string, username: string, password: string) {
    let router: Router = this.router;
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(stuff => {
        stuff.updateProfile({username: name, photoURL: null});
        router.navigate(['profile']);
      })
      .catch(error => {
        alert(error.message);
      })
  }

  loginUser(email: string, password: string) {
    let router: Router = this.router;
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then(function(){
        router.navigate(['profile']);
      })
      .catch(error => {
        alert(error.message);
      })
      this.local = this.afAuth.auth.currentUser;
  }

  logout() {
    this.afAuth.auth.signOut().catch(error=> {
      alert(error.message);
    })
  }

}
