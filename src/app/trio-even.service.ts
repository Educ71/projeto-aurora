import { Injectable } from '@angular/core';
import { TurnService } from './turn.service';

@Injectable({
  providedIn: 'root'
})
export class TrioEvenService {
  
  turnService: TurnService;

  trioVerify(): number {
    let turns = this.turnService.turn.diceValue;
    let result = 0;
    let index = turns.length - 1;
    console.log("As turns aqui: " + turns);
    for(let first = index; first > 0; first--){
      for (let second = first - 1; second > 0; second--) {
        for (let third = second - 1; third >= 0; third--) {
          console.log("as comparacoes aqui: " + turns[first]);
          console.log("as comparacoes aqui: " + turns[second]);
          console.log("as comparacoes aqui: " + turns[third]);
          if (turns[first] == turns[second] && turns[first] == turns[third]) {
            return 3*turns[first];
          }
        }      
      }
    }
    return result;
  }

  verifyEven(n: number, index: number, trio: number): number{
    let turns_ordenadas = this.turnService.turn.diceValue;
    let result = 0;
    console.log(turns_ordenadas);
    console.log("valor do n aqui:" + n)
    if (n > 0) { 
      for (let i = index; i > 0; i--) {
        let j = i - 1;
        console.log("i aqui: " + i);
        console.log("valor no index aqui: " + turns_ordenadas[i]);
        console.log("valor no i aqui: " + turns_ordenadas[j]);
        if(3*turns_ordenadas[i] != trio && turns_ordenadas[i] == turns_ordenadas[j]){
          result = this.verifyEven(n-1, j-1, trio);
          if ((result == 0 && n != 2) || (result != 0 && n == 2)) {
            return parseInt(result.toString()) + 2*parseInt(turns_ordenadas[i].toString());
          } else if (result == 0 && n == 2) {
            return 0;
          }
        }
      }
    }
    return result;
  }

  constructor(_turnService: TurnService) {
    this.turnService = _turnService;
  }

}