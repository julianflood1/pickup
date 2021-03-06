import { Component, OnInit, Input } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { UserService } from '../user.service';
import { Profile } from '../profile.model';
import { AuthenticationService } from '../authentication.service';
import { FirebaseToAppService } from '../firebase-app.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [UserService, AuthenticationService, FirebaseToAppService]
})
export class ProfileComponent implements OnInit {

  profiles;
  profilesFromDB;
  currentUserUID;
  currentUser = null;

  constructor(private userService: UserService,
              private authService: AuthenticationService,
              private fireService: FirebaseToAppService) {
    this.fireService.getProfiles().subscribe(data => {
      this.profilesFromDB = data
       this.currentUserUID = this.authService.afAuth.auth.currentUser.uid


      // TO COMPARE UID'S FROM CURRENT USER TO PROFILE INFO TO DISPLAY
          this.profiles = this.profilesFromDB;
            if(this.profiles.length > 0) {
              this.profiles.forEach(user => {
                if (user.uid === this.currentUserUID) {
                  this.currentUser = user;
                }
              })
            }


    })
  }

  ngOnInit() {
    this.profiles = this.profilesFromDB;
  }


  updateUser(userName:string, image:string, favTeam:string, uid:string){
    var makeUid = this.currentUserUID
    var newProfile: Profile = new Profile(userName, image, favTeam, makeUid);
    if((newProfile.userName === '') || (newProfile.image === '') || (newProfile.favTeam === '')) {
      alert('Please Fill Out Forms Completely.')
    } else {
      this.userService.addProfile(newProfile);
      alert('Profile Updated!');
      console.log(newProfile);
      }
    }



}
