import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [GameService]
})
export class AddComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  newEvent(park:string, time:string, addInfo:string, teamA: any[], teamB: any[]){
    var teamA:any[] = ["hello",3,"yes"];
    var teamB:any[] = ["this", 5, "shouldowrd"];
    var newGame: Game = new Game(park, time, addInfo, teamA, teamB);
    if((newGame.time === '') || (newGame.park === 'Select Park')) {
      alert('Please fill out required fields!')
    } else {
    this.gameService.addGame(newGame);
    alert('New Event has been added!');
    }
  }
}
