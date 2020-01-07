import { Component, OnInit } from '@angular/core';
import { TurnService } from '../turn.service';

@Component({
  selector: 'app-aurora-verify',
  templateUrl: './aurora-verify.component.html',
  styleUrls: ['./aurora-verify.component.css']
})
export class AuroraVerifyComponent implements OnInit {

  turnService: TurnService

  auroraVerify(): number{
    let size = this.turnService.turn.diceValue.length;
    let maior = this.turnService.turn.diceValue[size - 1];
    for (let i = size - 1; i >= 0; i--) {
      if (this.turnService.turn.diceValue[i] != maior) {
        return 0;
      }     
    }
    return 50;
  }

  constructor(_turnService: TurnService) { 
    this.turnService = _turnService;
  }

  ngOnInit() {
  }

}
