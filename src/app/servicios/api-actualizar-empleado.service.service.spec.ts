import { TestBed } from '@angular/core/testing';

import { ApiActualizarEmpleadoServiceService } from './api-actualizar-empleado.service.service';

describe('ApiActualizarEmpleadoServiceService', () => {
  let service: ApiActualizarEmpleadoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiActualizarEmpleadoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
