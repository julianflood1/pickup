import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;

  pro: FirebaseListObservable<any[]>;

  fire;

  constructor(private database: AngularFireDatabase) {
    this.games = database.list('games');
    this.pro = database.list('profiles');
  }

  getGames(){
    return this.games;
  }

  addGame(newGame: Game) {
    this.games.push(newGame);
  }

  getGameById(gameId: string){
    return this.database.object('games/' + gameId);
  }

  getUserById(uid: string){
    return this.database.object('profiles/' + uid);
  }

  teamAAdd(currentGame, currentUser){
    currentGame.teamA.push(currentUser)
    var gameInFirebase = this.getGameById(currentGame.$key)

    gameInFirebase.subscribe(data => {
      this.fire = data
      console.log(this.fire)
    })

    gameInFirebase.update({
      teamA: currentGame.teamA
    })
  }

  teamBAdd(currentGame, currentUser){
    currentGame.teamB.push(currentUser)
    var gameInFirebase = this.getGameById(currentGame.$key)
    gameInFirebase.update({
      teamB: currentGame.teamB
    })
  }

  leaderboardUpdate(currentUser){
    var userInFirebase = this.getUserById(currentUser.$key)
    userInFirebase.subscribe(data => {
      this.fire = data
    })
    userInFirebase.update({
      alberta: currentUser.alberta,
      colonelSummers: currentUser.colonelSummers
    })
  }
}
