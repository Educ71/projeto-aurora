import { TestBed } from '@angular/core/testing';

import { TrioEvenService } from './trio-even.service';

describe('TrioEvenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrioEvenService = TestBed.get(TrioEvenService);
    expect(service).toBeTruthy();
  });
});
