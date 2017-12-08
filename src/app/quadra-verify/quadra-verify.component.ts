
import { Component, OnInit } from '@angular/core';

import { JogadaService } from './../jogada.service';

@Component({
  selector: 'app-quadra-verify',
  templateUrl: './quadra-verify.component.html',
  styleUrls: ['./quadra-verify.component.css']
})
export class QuadraVerifyComponent implements OnInit {

  jogadaService: JogadaService;
  
  quadra_verify(): number {
    let jogadas = this.jogadaService.jogada.dice_value;
    let result = 0;
    let index = jogadas.length - 1;
    console.log("As jogadas aqui: " + jogadas);
    for(let first = index; first > 2; first--){
      for (let second = first - 1; second > 1; second--) {
        for (let third = second - 1; third > 0; third--) {
          for (let fourth = third - 1; fourth >= 0; fourth--) {
            console.log("as comparacoes aqui: " + jogadas[first]);
            console.log("as comparacoes aqui: " + jogadas[second]);
            console.log("as comparacoes aqui: " + jogadas[third]);
            console.log("as comparacoes aqui: " + jogadas[fourth]);
            if (jogadas[first] == jogadas[second] && jogadas[first] == jogadas[third] && jogadas[first] == jogadas[fourth]) {
              return 4*jogadas[first];
            }
          }
        }      
      }
    }
    return result;
  }
  
  constructor(_jogadaService: JogadaService) {
    this.jogadaService = _jogadaService;
  }

  ngOnInit() {
  }

}
