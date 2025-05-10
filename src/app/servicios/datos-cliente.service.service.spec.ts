import { TestBed } from '@angular/core/testing';

import { DatosClienteServiceService } from './datos-cliente.service.service';

describe('DatosClienteServiceService', () => {
  let service: DatosClienteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosClienteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
