import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Jogada } from './../jogada/jogada.component';
import { JogadaService } from './../jogada.service';
import { TrioEvenService } from '../trio-even.service';

@Component({
  selector: 'app-even-verify',
  templateUrl: './even-verify.component.html',
  styleUrls: ['./even-verify.component.css']
})
export class EvenVerifyComponent implements OnInit {

  valor: number;

  trioEvenService: TrioEvenService;

  even(n: number, index: number):number {
    let trio = this.trioEvenService.trio_verify();
    return this.trioEvenService.verify_even(n, index, trio);
  }

  constructor(_trioEvenService: TrioEvenService, private router: ActivatedRoute) { 
    this.trioEvenService = _trioEvenService;
    this.valor = this.router.snapshot.params['valor'];
  }

  ngOnInit() {
  }

}
