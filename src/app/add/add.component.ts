import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [GameService]
})
export class AddComponent implements OnInit {

  constructor(private gameService: GameService, public router: Router) { }

  ngOnInit() {
  }

  newEvent(park:string, time:string, addInfo:string, teamA: any[], teamB: any[]){
    var teamA:any[] = [" "];
    var teamB:any[] = [" "];
    var newGame: Game = new Game(park, time, addInfo, teamA, teamB);
    if((newGame.time === '') || (newGame.park === 'Select Park')) {
      alert('Please fill out required fields!')
    } else {
    this.gameService.addGame(newGame);
    alert('New Event has been added!');
    this.router.navigate(['select']);
    }
  }
}
