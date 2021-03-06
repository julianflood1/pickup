import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { Http, Response } from '@angular/http';
import { Profile } from './profile.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from './authentication.service';



@Injectable()
export class FirebaseToAppService {
  games: FirebaseListObservable<any[]>;
  profiles: FirebaseListObservable<any[]>;



  constructor(private database: AngularFireDatabase, private http: Http, private authService: AuthenticationService) {
    this.profiles = this.database.list('profiles');
    this.games = this.database.list('games');
  }

  getProfiles(){
    return this.profiles;
  }

  getGames(){
    return this.games;
  }


}
