import { Component, OnInit } from '@angular/core';
import { TurnService } from '../turn.service';

@Component({
  selector: 'app-quadra-verify',
  templateUrl: './quadra-verify.component.html',
  styleUrls: ['./quadra-verify.component.css']
})
export class QuadraVerifyComponent implements OnInit {

  turnService: TurnService;
  
  quadraVerify(): number {
    let turns = this.turnService.turn.diceValue;
    let result = 0;
    let index = turns.length - 1;
    console.log("As turns aqui: " + turns);
    for(let first = index; first > 2; first--){
      for (let second = first - 1; second > 1; second--) {
        for (let third = second - 1; third > 0; third--) {
          for (let fourth = third - 1; fourth >= 0; fourth--) {
            console.log("as comparacoes aqui: " + turns[first]);
            console.log("as comparacoes aqui: " + turns[second]);
            console.log("as comparacoes aqui: " + turns[third]);
            console.log("as comparacoes aqui: " + turns[fourth]);
            if (turns[first] == turns[second] && turns[first] == turns[third] && turns[first] == turns[fourth]) {
              return 4*turns[first];
            }
          }
        }      
      }
    }
    return result;
  }
  
  constructor(_turnService: TurnService) {
    this.turnService = _turnService;
  }

  ngOnInit() {
  }

}