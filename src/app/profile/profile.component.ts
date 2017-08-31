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
      console.log(this.profilesFromDB[1].uid)
       this.currentUserUID = this.authService.afAuth.auth.currentUser.uid
      console.log(this.currentUserUID)


      // TO COMPARE UID'S FROM CURRENT USER TO PROFILE INFO TO DISPLAY
          this.profiles = this.profilesFromDB;
            if(this.profiles.length > 0) {
              this.profiles.forEach(user => {
                if (user.uid === this.currentUserUID) {
                  console.log(user.uid);
                  console.log(this.currentUserUID)
                  this.currentUser = user;
                  console.log(this.currentUser)
                }
              })
            }


    })
  }

  ngOnInit() {
    this.profiles = this.profilesFromDB;
  }


//figure out how to tell database that currentUser is making the new User
  updateUser(userName:string, profileImage:string, favTeam:string, uid:string){
    var makeUid = this.currentUserUID
    console.log(makeUid)
    var newProfile: Profile = new Profile(userName, profileImage, favTeam, makeUid);
    this.userService.addProfile(newProfile);
    alert('New Profile has been created!');
    console.log(newProfile);
    }




}
