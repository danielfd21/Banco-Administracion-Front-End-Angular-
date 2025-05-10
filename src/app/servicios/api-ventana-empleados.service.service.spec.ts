import { TestBed } from '@angular/core/testing';

import { ApiVentanaEmpleadosServiceService } from './api-ventana-empleados.service.service';

describe('ApiVentanaEmpleadosServiceService', () => {
  let service: ApiVentanaEmpleadosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiVentanaEmpleadosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
