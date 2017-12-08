
import { Component, OnInit } from '@angular/core';

import { JogadaService } from './../jogada.service';
import { TrioEvenService } from '../trio-even.service';

@Component({
  selector: 'app-trio-verify',
  templateUrl: './trio-verify.component.html',
  styleUrls: ['./trio-verify.component.css']
})
export class TrioVerifyComponent implements OnInit {

  trioEvenService: TrioEvenService;

  constructor(_trioEvenService: TrioEvenService) {
    this.trioEvenService = _trioEvenService;
  }

  ngOnInit() {
  }

}
