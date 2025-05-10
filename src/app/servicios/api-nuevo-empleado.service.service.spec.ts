import { TestBed } from '@angular/core/testing';

import { ApiNuevoEmpleadoServiceService } from './api-nuevo-empleado.service.service';

describe('ApiNuevoEmpleadoServiceService', () => {
  let service: ApiNuevoEmpleadoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNuevoEmpleadoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
