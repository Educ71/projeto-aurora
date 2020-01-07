import { Component, OnInit } from '@angular/core';
import { TurnService } from '../turn.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sequency-verify',
  templateUrl: './sequency-verify.component.html',
  styleUrls: ['./sequency-verify.component.css']
})
export class SequencyVerifyComponent implements OnInit {

  valor: number;

  turnService: TurnService;

  sequencyVerify(n: number): number{
    let size = this.turnService.turn.diceValue.length;
    let turn = this.turnService.turn.diceValue;
    for (let j = size - 1; j >= 0; j--){
      let maior = this.turnService.turn.diceValue[j];
      let sequency = 0;
      for (let i = size - 1; i >= 0; i--) {
        console.log("jogada depois: " + turn[i]);
        console.log("jogada maior: " + maior);
        if(turn[i] == maior - 1){
          maior = turn[i];
          sequency++;
          if (sequency == n) {
            return 5*n;
          }
        }
      }
    }
    return 0;
  }

  constructor(_turnService: TurnService, private router: ActivatedRoute) { 
    this.turnService = _turnService;
    this.valor = this.router.snapshot.params['valor'];
  }

  ngOnInit() {
  }

}
