import { TestBed } from '@angular/core/testing';

import { ApiNuevaClaveServiceService } from './api-nueva-clave.service.service';

describe('ApiNuevaClaveServiceService', () => {
  let service: ApiNuevaClaveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNuevaClaveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
