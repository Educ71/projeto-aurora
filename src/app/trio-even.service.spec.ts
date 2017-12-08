import { TestBed, inject } from '@angular/core/testing';

import { TrioEvenService } from './trio-even.service';

describe('TrioEvenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrioEvenService]
    });
  });

  it('should be created', inject([TrioEvenService], (service: TrioEvenService) => {
    expect(service).toBeTruthy();
  }));
});
