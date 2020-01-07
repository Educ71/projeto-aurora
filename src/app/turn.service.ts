import { Injectable } from '@angular/core';
import { Turn } from './turn/turn.component';

@Injectable({
  providedIn: 'root'
})
export class TurnService {

  turn: Turn = new Turn()

  constructor() { }
}
