import { Component, OnInit } from '@angular/core';

import { JogadaService } from './../jogada.service';
import { TrioEvenService } from './../trio-even.service';

@Component({
  selector: 'app-full-house-verify',
  templateUrl: './full-house-verify.component.html',
  styleUrls: ['./full-house-verify.component.css']
})
export class FullHouseVerifyComponent implements OnInit {

  trioEvenService: TrioEvenService;
  
  full_house_verify(): number{
    let trio = this.trioEvenService.trio_verify();
    if (trio == 0) {
      return 0;
    } else {
      let even = this.trioEvenService.verify_even(1, 5, trio);
      if(even == 0){
        return 0;
      } else return this.soma();
    }
  }

  soma(): number {
    let result = 0;
    for (let i = 0; i < this.trioEvenService.jogadaService.jogada.dice_value.length; i++) {
      result = parseInt(result.toString()) + parseInt(this.trioEvenService.jogadaService.jogada.dice_value[i].toString());
    }
    return result;
  }

  constructor(_trioEvenService: TrioEvenService) { 
    this.trioEvenService = _trioEvenService;
  }

  ngOnInit() {
  }

}
