
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Jogada } from './../jogada/jogada.component';
import { JogadaService } from './../jogada.service';

@Component({
  selector: 'app-value-verify',
  templateUrl: './value-verify.component.html',
  styleUrls: ['./value-verify.component.css']
})
export class ValueVerifyComponent implements OnInit {

  valor: number;

  private jogadaService: JogadaService;

  verify(val: number): number {
    let result: number = 0;
    let size = this.jogadaService.jogada.dice_value.length;
    for (let i = 0; i < size; i++) {
      if (this.jogadaService.jogada.dice_value[i] == val) {
        result = parseInt(result.toString()) + parseInt(this.jogadaService.jogada.dice_value[i]);
      }     
    }
    // if(this.jogadaService.jogada.dice_one == val){
    //   result = parseInt(result.toString()) + parseInt(this.jogadaService.jogada.dice_one.toString());
    // }
    // if(this.jogadaService.jogada.dice_two == val){
    //   result = parseInt(result.toString()) + parseInt(this.jogadaService.jogada.dice_two.toString());
    // }
    // if(this.jogadaService.jogada.dice_three == val){
    //   result = parseInt(result.toString()) + parseInt(this.jogadaService.jogada.dice_three.toString());
    // }
    // if(this.jogadaService.jogada.dice_four == val) {
    //   result = parseInt(result.toString()) + parseInt(this.jogadaService.jogada.dice_four.toString());
    // } 
    // if(this.jogadaService.jogada.dice_five == val) {
    //   result = parseInt(result.toString()) + parseInt(this.jogadaService.jogada.dice_five.toString());
    // }
    return result;
  }

  constructor(_jogadaService: JogadaService, private route: ActivatedRoute) { 
    this.jogadaService = _jogadaService;
    this.valor = this.route.snapshot.params['valor'];
  }

  ngOnInit() {
  }

}
