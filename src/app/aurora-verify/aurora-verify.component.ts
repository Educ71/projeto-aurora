
import { Component, OnInit } from '@angular/core';

import { JogadaService } from '../jogada.service';

@Component({
  selector: 'app-aurora-verify',
  templateUrl: './aurora-verify.component.html',
  styleUrls: ['./aurora-verify.component.css']
})
export class AuroraVerifyComponent implements OnInit {

  jogadaService: JogadaService

  aurora_verify(): number{
    let size = this.jogadaService.jogada.dice_value.length;
    let maior = this.jogadaService.jogada.dice_value[size - 1];
    for (let i = size - 1; i >= 0; i--) {
      if (this.jogadaService.jogada.dice_value[i] != maior) {
        return 0;
      }     
    }
    return 50;
  }

  constructor(_jogadaService: JogadaService) { 
    this.jogadaService = _jogadaService;
  }

  ngOnInit() {
  }

}
