import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.games = database.list('games');
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

  teamAAdd(currentGame, currentUser){
    currentGame.teamA.push(currentUser)
    var gameInFirebase = this.getGameById(currentGame.$key)
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
}


//
// game.teamA.push(currentUser)
//
// var gameInFirebase = this.getGameById(game.$key)
//   gameInFirebase.update({
//   teamA: game.teamA
// })
// }
