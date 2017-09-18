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

  fullA= true;
  fullB = true;

  uid;


  constructor(private route: ActivatedRoute,
              private location: Location,
              private gameService: GameService,
              private authService: AuthenticationService,
              private fireService: FirebaseToAppService) {

            this.fireService.getProfiles().subscribe(data => {
              this.profilesFromDB = data
               this.currentUserUID = this.authService.afAuth.auth.currentUser.uid
               this.uid = this.currentUserUID

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
                    //  if(this.currentGame.teamA.length >= 4) {
                    //    this.fullA = false;
                    //  }
                     if(this.currentGame.teamB.length >= 4) {
                       this.fullB = false;
                     }
                     if((this.fullB === false) && (this.fullA === false)) {
                       alert('Both teams are full! Lets play!');
                     }
                   }
                 })
               }
             })
            }

  ngOnInit() {
    this.gameToDisplay = this.gameService.getGameById(this.gameId);
  }




  joinGameA(){
    console.log(this.currentUser)
    if(this.currentGame.park === 'Laurelhurst') {
      this.currentUser.laurelhurst += 1;
    } else if (this.currentGame.park === 'Alberta') {
      this.currentUser.alberta += 1;
    } else if (this.currentGame.park === 'Irving') {
      this.currentUser.irving += 1;
    } else if (this.currentGame.park === 'Chinatown Park') {
      this.currentUser.chinatownPark += 1;
    } else if (this.currentGame.park === 'Colonel Summers') {
      this.currentUser.colonelSummers += 1;
    }

    this.gameService.leaderboardUpdate(this.currentUser)



    console.log(this.currentUser.laurelhurst)
    console.log(this.currentUser.alberta)
    console.log(this.currentUser.irving)
    console.log(this.currentUser.chinatownPark)
    console.log(this.currentUser.colonelSummers)


    this.gameService.teamAAdd(this.currentGame, this.currentUser)

  }

  joinGameB(){
    this.gameService.teamBAdd(this.currentGame, this.currentUser)

  }

}
