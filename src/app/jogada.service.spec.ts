import { TestBed, inject } from '@angular/core/testing';

import { JogadaService } from './jogada.service';

describe('JogadaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JogadaService]
    });
  });

  it('should be created', inject([JogadaService], (service: JogadaService) => {
    expect(service).toBeTruthy();
  }));
});
