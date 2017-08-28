import { Component, OnInit, Input } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {

  constructor(private gameService: UserService) { }

  ngOnInit() {
  }

  createNewUser(userName:string, profileImage:string, favTeam){
    var newUser: User = new User(userName, profileImage, favTeam);
    this.gameService.addUser(newUser);
    alert('New User has been created!');
  }

  beginUpdateUser(UserToUpdate){
    // this.gameService.updateUser(UserToUpdate);
  }

}
