import { Component, OnInit } from '@angular/core';
import { TrioEvenService } from '../trio-even.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-even-verify',
  templateUrl: './even-verify.component.html',
  styleUrls: ['./even-verify.component.css']
})
export class EvenVerifyComponent implements OnInit {

  valor: number;

  trioEvenService: TrioEvenService;

  even(n: number, index: number):number {
    let trio = this.trioEvenService.trioVerify();
    return this.trioEvenService.verifyEven(n, index, trio);
  }

  constructor(_trioEvenService: TrioEvenService, private router: ActivatedRoute) { 
    this.trioEvenService = _trioEvenService;
    this.valor = this.router.snapshot.params['valor'];
  }

  ngOnInit() {
  }

}
