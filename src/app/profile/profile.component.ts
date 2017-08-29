import { Component, OnInit, Input } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { AuthenticationService } from '../authentication.service';
import { FirebaseToAppService } from '../firebase-app.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [UserService, AuthenticationService]
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private authService: AuthenticationService, private fireService: FirebaseToAppService) {
  }
  local;
  ngOnInit() {
  }

  updateUser(userName:string, profileImage:string, favTeam){
    var newUser: User = new User(userName, profileImage, favTeam);
    this.userService.addUser(newUser);
    this.fireService.getUsers();
    alert('New User has been created!');
    }


}
