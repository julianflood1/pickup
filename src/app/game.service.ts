import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;
  gameFromData = [];
  gameInFirebase: FirebaseListObservable<any[]>;

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



//using push to add data to database
  updatePlayers(game, player: any[]){
    var gameInFirebase = this.getGameById(game.$key)
    gameInFirebase.subscribe(data => {
      this.gameFromData = data
      console.log(this.gameFromData)
    })
    this.gameFromData.push(player)
    console.log(game);
  }


//using update to add data to database
  updateGame(game, currentUser){
    console.log(game.teamA)
      game.teamA.push(currentUser)
      console.log(game.teamA)

      var gameInFirebase = this.getGameById(game.$key)
      console.log(gameInFirebase)
      gameInFirebase.update({
        teamA: game.teamA
      })
    }

}
