import { TestBed } from '@angular/core/testing';

import { ApiLoginServiceService } from './api-login-service.service';

describe('ApiLoginServiceService', () => {
  let service: ApiLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
