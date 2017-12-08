import { Injectable } from '@angular/core';

import { Jogada } from './jogada/jogada.component';

@Injectable()
export class JogadaService {

  jogada: Jogada = new Jogada();
  
  constructor() { }

}
