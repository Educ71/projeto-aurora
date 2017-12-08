import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { JogadaService } from './../jogada.service';

@Component({
  selector: 'app-sequency-verify',
  templateUrl: './sequency-verify.component.html',
  styleUrls: ['./sequency-verify.component.css']
})
export class SequencyVerifyComponent implements OnInit {

  valor: number;

  jogadaService: JogadaService;

  sequency_verify(n: number): number{
    let size = this.jogadaService.jogada.dice_value.length;
    let jogada = this.jogadaService.jogada.dice_value;
    for (let j = size - 1; j >= 0; j--){
      let maior = this.jogadaService.jogada.dice_value[j];
      let sequency = 0;
      for (let i = size - 1; i >= 0; i--) {
        console.log("jogada depois: " + jogada[i]);
        console.log("jogada maior: " + maior);
        if(jogada[i] == maior - 1){
          maior = jogada[i];
          sequency++;
          if (sequency == n) {
            return 5*n;
          }
        }
      }
    }
    return 0;
  }

  constructor(_jogadaService: JogadaService, private router: ActivatedRoute) { 
    this.jogadaService = _jogadaService;
    this.valor = this.router.snapshot.params['valor'];
  }

  ngOnInit() {
  }

}
