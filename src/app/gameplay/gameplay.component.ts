import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Game } from '../game.model';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';
import { FirebaseToAppService } from '../firebase-app.service';
import * as firebase from "firebase";



@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss'],
  providers:[GameService, AuthenticationService, FirebaseToAppService]
})

export class GameplayComponent implements OnInit {

  gameId:string;
  gameToDisplay;

  profiles;
  profilesFromDB;
  currentUserUID;
  currentUser = null;

  games;
  gamesfromDB;
  currentGame;

  join = null;
  full= true;





  constructor(private route: ActivatedRoute,
              private location: Location,
              private gameService: GameService,
              private authService: AuthenticationService,
              private fireService: FirebaseToAppService) {

            this.fireService.getProfiles().subscribe(data => {
              this.profilesFromDB = data
               this.currentUserUID = this.authService.afAuth.auth.currentUser.uid

               this.profiles = this.profilesFromDB;
                 if(this.profiles.length > 0) {
                   this.profiles.forEach(user => {
                     if (user.uid === this.currentUserUID) {
                       this.currentUser = user;
                     }
                   })
                 }

             })

             this.route.params.forEach((urlParameters) => {
               this.gameId = urlParameters['id'];
             });

             this.fireService.getGames().subscribe(data => {
               this.gamesfromDB = data
               this.games = this.gamesfromDB;
               if(this.games.length > 0) {
                 this.games.forEach(game => {
                   if(game.$key === this.gameId) {
                     this.currentGame = game;
                   }
                 })
               }
             })
            }

  ngOnInit() {
    this.gameToDisplay = this.gameService.getGameById(this.gameId);
  }



  joinGame(){
    this.join = true;
    console.log(this.currentGame)
    console.log(this.currentUser)

    this.gameService.pushGame(this.currentGame, this.currentUser)

    this.gameService.updateGame(this.currentGame, this.currentUser)
    if(this.currentGame.teamA.length > 5) {
      this.full = false;
    }
    console.log(this.full)
  }

}
