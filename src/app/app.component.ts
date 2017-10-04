import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service'; //import service
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user;
  local;
  public isLoggedIn: boolean;

  constructor(public authService: AuthenticationService, public router: Router){
    this.authService.user.subscribe(user => {
      if(user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['']);
      } else {
        this.isLoggedIn = true;
        this.local = this.authService.afAuth.auth.currentUser;
      }
    })
  }

  logout(){
    this.authService.logout();
  }
}
