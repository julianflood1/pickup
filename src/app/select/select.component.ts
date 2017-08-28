import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [GameService]
})
export class SelectComponent implements OnInit {

  games: FirebaseListObservable<any[]>;


  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

}
