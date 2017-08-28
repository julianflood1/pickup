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
  currentRoute: string = this.router.url;

  showGame: boolean = false;

  constructor(private router: Router, private gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

  getValue(newValue: Game){
    console.log(newValue);
    this.showGame = true;
  }

  newEvent(park:string, time:string, addInfo:string){
    var newGame: Game = new Game(park, time, addInfo);
    this.gameService.addGame(newGame);
    alert('New Event has been added!');
    }

    goToDetailPage(clickedGame) {
      this.router.navigate(['games',clickedGame.$key]);
    }
  // onChange(optionFromMenu) {
  //   console.log(this.games)
  // }

}
