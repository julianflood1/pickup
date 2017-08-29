import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { Http, Response } from '@angular/http';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from './authentication.service';



@Injectable()
export class FirebaseToAppService {
  games: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;
  userToUpdate: FirebaseListObservable<any[]>;



  constructor(private database: AngularFireDatabase, private http: Http, private authService: AuthenticationService) {
  }

  getUsers(){
    return this.users;
  }

  getUserById(userId: string){
    return this.database.object('users/' + userId);
  }


}
