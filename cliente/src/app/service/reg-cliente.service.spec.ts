import { TestBed } from '@angular/core/testing';

import { RegClienteService } from './reg-cliente.service';

describe('RegClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegClienteService = TestBed.get(RegClienteService);
    expect(service).toBeTruthy();
  });
});
