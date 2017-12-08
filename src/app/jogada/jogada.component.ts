
import { Component, OnInit } from '@angular/core';

import { JogadaService } from '../jogada.service';

@Component({
  selector: 'app-jogada',
  templateUrl: './jogada.component.html',
  styleUrls: ['./jogada.component.css']
})
export class JogadaComponent implements OnInit {

  private jogadaService: JogadaService;

  jogadas(): boolean {
    if(this.not_null() && this.value_ok()){
        this.jogadaService.jogada.dice_value.sort();
        return true;
    } else return false;
  }

  not_null(): boolean {
    let size = this.jogadaService.jogada.dice_value.length;
    if (size != 5) {
      return false;
    } else for (let i = 0; i < size; i++) {
      if(this.jogadaService.jogada.dice_value[i] == null){
        return false;
      }
    }
    return true;
  }

  value_ok(): boolean {
    let size = this.jogadaService.jogada.dice_value.length;
    if (size != 5) {
      return false;
    } else for (let i = 0; i < size; i++) {
      if(this.jogadaService.jogada.dice_value[i] > 7 ||
         this.jogadaService.jogada.dice_value[i] <= 0){
        return false;
      }
    }
    return true;
  }
  
  constructor(_jogada: JogadaService) { 
    this.jogadaService = _jogada;
  }

  ngOnInit() {
  }

}

export class Jogada {
  dice_value = [];
}