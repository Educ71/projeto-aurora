import { Component, OnInit } from '@angular/core';
import { TrioEvenService } from '../trio-even.service';

@Component({
  selector: 'app-full-house-verify',
  templateUrl: './full-house-verify.component.html',
  styleUrls: ['./full-house-verify.component.css']
})
export class FullHouseVerifyComponent implements OnInit {
  trioEvenService: TrioEvenService;
  
  fullHouseVerify(): number{
    let trio = this.trioEvenService.trioVerify();
    if (trio == 0) {
      return 0;
    } else {
      let even = this.trioEvenService.verifyEven(1, 5, trio);
      if(even == 0){
        return 0;
      } else return this.soma();
    }
  }

  soma(): number {
    let result = 0;
    for (let i = 0; i < this.trioEvenService.turnService.turn.diceValue.length; i++) {
      result = parseInt(result.toString()) + parseInt(this.trioEvenService.turnService.turn.diceValue[i].toString());
    }
    return result;
  }

  constructor(_trioEvenService: TrioEvenService) { 
    this.trioEvenService = _trioEvenService;
  }

  ngOnInit() {
  }

}
