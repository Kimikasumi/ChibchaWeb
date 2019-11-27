import { TestBed } from '@angular/core/testing';

import { DistribuidorService } from './distribuidor.service';

describe('DistribuidorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistribuidorService = TestBed.get(DistribuidorService);
    expect(service).toBeTruthy();
  });
});
