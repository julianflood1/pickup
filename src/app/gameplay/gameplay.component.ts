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

  leaderboard;
  current

  chinatownPark = null
  irving = null
  alberta = null
  colonelSummers = null
  laurelhurst = null


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
                     if(this.currentGame.teamA.length >= 4) {
                       this.fullA = false;
                     }
                     if(this.currentGame.teamB.length >= 4) {
                       this.fullB = false;
                     }
                     this.profiles.forEach(profile => {
                       if(this.currentGame.park === 'Irving') {
                         this.irving = true;
                       } else if(this.currentGame.park === 'Laurelhurst') {
                          this.laurelhurst = true;
                       } else if(this.currentGame.park === 'Alberta') {
                          this.alberta = true;
                       } else if(this.currentGame.park === 'Colonel Summers')
                        {
                         this.colonelSummers = true;
                       } else if(this.currentGame.park === 'Chinatown Park') {
                         this.chinatownPark = true;
                       }
                     })
                   }
                 })
               }
             })
             if((this.fullB === false) && (this.fullA === false)) {
               alert('Both teams are full! Lets play!');
             }
            }

  ngOnInit() {
    this.gameToDisplay = this.gameService.getGameById(this.gameId);
  }



  joinGameA(){

    // if((this.currentGame.teamB[1]) || (this.currentGame.teamB[2]) || (this.currentGame.teamB[3]) || (this.currentGame.teamA[1]) || (this.currentGame.teamA[2]) || (this.currentGame.teamA[3])  === (this.currentUser.userName)){
    //   alert('You are already signed up to play this game!')
    //   return;
    // }

    // if(this.currentGame.teamA[1]) {
    //   if((this.currentGame.teamA[1].userName) === (this.currentUser.userName) || (this.currentGame.teamA[2].userName) === (this.currentUser.userName) || (this.currentGame.teamA[3].userName) === (this.currentUser.userName) || (this.currentGame.teamB[1].userName) === (this.currentUser.userName) || (this.currentGame.teamB[2].userName) === (this.currentUser.userName) || (this.currentGame.teamB[3].userName) === (this.currentUser.userName)){
    //     alert('You are already signed up to play this game!')
    //     return;
    //   }
    // }
    // if(this.currentGame.teamA[2]) {
    //   if((this.currentGame.teamA[1].userName) === (this.currentUser.userName) || (this.currentGame.teamA[2].userName) === (this.currentUser.userName) || (this.currentGame.teamA[3].userName) === (this.currentUser.userName) || (this.currentGame.teamB[1].userName) === (this.currentUser.userName) || (this.currentGame.teamB[2].userName) === (this.currentUser.userName) || (this.currentGame.teamB[3].userName) === (this.currentUser.userName)){
    //     alert('You are already signed up to play this game!')
    //     return;
    //   }
    // }
    // if(this.currentGame.teamA[3]) {
    //   if((this.currentGame.teamA[1].userName) === (this.currentUser.userName) || (this.currentGame.teamA[2].userName) === (this.currentUser.userName) || (this.currentGame.teamA[3].userName) === (this.currentUser.userName) || (this.currentGame.teamB[1].userName) === (this.currentUser.userName) || (this.currentGame.teamB[2].userName) === (this.currentUser.userName) || (this.currentGame.teamB[3].userName) === (this.currentUser.userName)){
    //     alert('You are already signed up to play this game!')
    //     return;
    //   }
    // }






    if(this.currentGame.park === 'Laurelhurst')  {
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
    this.gameService.teamAAdd(this.currentGame, this.currentUser)


    this.gameService.leaderboardUpdate(this.currentUser)


  }

  joinGameB(){

    // if(this.currentGame.teamB[1]) {
    //   if((this.currentGame.teamA[1].userName) === (this.currentUser.userName) || (this.currentGame.teamB[1].userName) === (this.currentUser.userName) || (this.currentGame.teamB[2].userName) === (this.currentUser.userName) || (this.currentGame.teamB[3].userName) === (this.currentUser.userName)){
    //     alert('You are already signed up to play this game!')
    //     return;
    //   }
    // }
    // if(this.currentGame.teamB[2]) {
    //   if((this.currentGame.teamA[1].userName) === (this.currentUser.userName) || (this.currentGame.teamB[1].userName) === (this.currentUser.userName) || (this.currentGame.teamB[2].userName) === (this.currentUser.userName) || (this.currentGame.teamB[3].userName) === (this.currentUser.userName)){
    //     alert('You are already signed up to play this game!')
    //     return;
    //   }
    // }
    // if(this.currentGame.teamB[3]) {
    //   if((this.currentGame.teamA[1].userName) === (this.currentUser.userName) || (this.currentGame.teamB[1].userName) === (this.currentUser.userName) || (this.currentGame.teamB[2].userName) === (this.currentUser.userName) || (this.currentGame.teamB[3].userName) === (this.currentUser.userName)){
    //     alert('You are already signed up to play this game!')
    //     return;
    //   }
    // }

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


      this.gameService.teamBAdd(this.currentGame, this.currentUser)

      this.gameService.leaderboardUpdate(this.currentUser)
    }



  }
