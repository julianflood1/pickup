import { Component, OnInit, Input } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { GameService } from '../game.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
