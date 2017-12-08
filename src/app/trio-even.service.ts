import { Injectable } from '@angular/core';

import { JogadaService } from './jogada.service';

@Injectable()
export class TrioEvenService {
  
  jogadaService: JogadaService;

  trio_verify(): number {
    let jogadas = this.jogadaService.jogada.dice_value;
    let result = 0;
    let index = jogadas.length - 1;
    console.log("As jogadas aqui: " + jogadas);
    for(let first = index; first > 0; first--){
      for (let second = first - 1; second > 0; second--) {
        for (let third = second - 1; third >= 0; third--) {
          console.log("as comparacoes aqui: " + jogadas[first]);
          console.log("as comparacoes aqui: " + jogadas[second]);
          console.log("as comparacoes aqui: " + jogadas[third]);
          if (jogadas[first] == jogadas[second] && jogadas[first] == jogadas[third]) {
            return 3*jogadas[first];
          }
        }      
      }
    }
    return result;
  }

  verify_even(n: number, index: number, trio: number): number{
    let jogadas_ordenadas = this.jogadaService.jogada.dice_value;
    let result = 0;
    console.log(jogadas_ordenadas);
    console.log("valor do n aqui:" + n)
    if (n > 0) { 
      for (let i = index; i > 0; i--) {
        let j = i - 1;
        console.log("i aqui: " + i);
        console.log("valor no index aqui: " + jogadas_ordenadas[i]);
        console.log("valor no i aqui: " + jogadas_ordenadas[j]);
        if(3*jogadas_ordenadas[i] != trio && jogadas_ordenadas[i] == jogadas_ordenadas[j]){
          result = this.verify_even(n-1, j-1, trio);
          if ((result == 0 && n != 2) || (result != 0 && n == 2)) {
            return parseInt(result.toString()) + 2*parseInt(jogadas_ordenadas[i].toString());
          } else if (result == 0 && n == 2) {
            return 0;
          }
        }
      }
    }
    return result;
  }

  constructor(_jogadaService: JogadaService) {
    this.jogadaService = _jogadaService;
  }

}
