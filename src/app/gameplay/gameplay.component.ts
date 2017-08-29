import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Game } from '../game.model';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss'],
  providers:[GameService]
})
export class GameplayComponent implements OnInit {

  gameId:string;
  gameToDisplay;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private gameService: GameService
            ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.gameId = urlParameters['id'];
    });
    this.gameToDisplay = this.gameService.getGameById(this.gameId);
  }

}
