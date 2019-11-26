import { TestBed } from '@angular/core/testing';

import { RegistradorService } from './registrador.service';

describe('RegistradorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistradorService = TestBed.get(RegistradorService);
    expect(service).toBeTruthy();
  });
});
