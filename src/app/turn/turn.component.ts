import { Component, OnInit } from '@angular/core';
import { TurnService } from '../turn.service';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.css']
})
export class TurnComponent implements OnInit {

  private turnService: TurnService;

  turns(): boolean {
    if(this.not_null() && this.value_ok()){
        this.turnService.turn.diceValue.sort();
        return true;
    } else return false;
  }

  not_null(): boolean {
    let size = this.turnService.turn.diceValue.length;
    if (size != 5) {
      return false;
    } else for (let i = 0; i < size; i++) {
      if(this.turnService.turn.diceValue[i] == null){
        return false;
      }
    }
    return true;
  }

  value_ok(): boolean {
    let size = this.turnService.turn.diceValue.length;
    if (size != 5) {
      return false;
    } else for (let i = 0; i < size; i++) {
      if(this.turnService.turn.diceValue[i] > 7 ||
         this.turnService.turn.diceValue[i] <= 0){
        return false;
      }
    }
    return true;
  }
  
  constructor(_turn: TurnService) { 
    this.turnService = _turn;
  }

  ngOnInit() {
  }

}

export class Turn {
  diceValue = [];
}
