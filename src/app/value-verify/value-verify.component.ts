import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TurnService } from './../turn.service';

@Component({
  selector: 'app-value-verify',
  templateUrl: './value-verify.component.html',
  styleUrls: ['./value-verify.component.css']
})
export class ValueVerifyComponent implements OnInit {

  valor: number;

  private turnService: TurnService;

  verify(val: number): number {
    let result: number = 0;
    let size = this.turnService.turn.diceValue.length;
    for (let i = 0; i < size; i++) {
      if (this.turnService.turn.diceValue[i] == val) {
        result = parseInt(result.toString()) + parseInt(this.turnService.turn.diceValue[i]);
      }     
    }
    // if(this.turnService.turn.dice_one == val){
    //   result = parseInt(result.toString()) + parseInt(this.turnService.turn.dice_one.toString());
    // }
    // if(this.turnService.turn.dice_two == val){
    //   result = parseInt(result.toString()) + parseInt(this.turnService.turn.dice_two.toString());
    // }
    // if(this.turnService.turn.dice_three == val){
    //   result = parseInt(result.toString()) + parseInt(this.turnService.turn.dice_three.toString());
    // }
    // if(this.turnService.turn.dice_four == val) {
    //   result = parseInt(result.toString()) + parseInt(this.turnService.turn.dice_four.toString());
    // } 
    // if(this.turnService.turn.dice_five == val) {
    //   result = parseInt(result.toString()) + parseInt(this.turnService.turn.dice_five.toString());
    // }
    return result;
  }

  constructor(_turnService: TurnService, private route: ActivatedRoute) { 
    this.turnService = _turnService;
    this.valor = this.route.snapshot.params['valor'];
  }

  ngOnInit() {
  }

}
