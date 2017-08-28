import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss'],
  providers:[GameService]
})
export class GameplayComponent implements OnInit {
  games: FirebaseListObservable<any[]>;

  gameId:string;
  gameToDisplay;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
    this.gameToDisplay = this.gameService.getGameById(this.gameId);
  }

}
