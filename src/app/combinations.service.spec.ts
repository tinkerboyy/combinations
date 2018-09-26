import { TestBed } from '@angular/core/testing';

import { CombinationsService } from './combinations.service';

describe('CombinationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CombinationsService = TestBed.get(CombinationsService);
    expect(service).toBeTruthy();
  });
});
