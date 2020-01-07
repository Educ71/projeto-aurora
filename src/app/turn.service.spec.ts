import { TestBed } from '@angular/core/testing';

import { TurnService } from './turn.service';

describe('TurnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurnService = TestBed.get(TurnService);
    expect(service).toBeTruthy();
  });
});
