import { TestBed } from '@angular/core/testing';

import { ApiEliminarEmpleadosServiceService } from './api-eliminar-empleados.service.service';

describe('ApiEliminarEmpleadosServiceService', () => {
  let service: ApiEliminarEmpleadosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEliminarEmpleadosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
