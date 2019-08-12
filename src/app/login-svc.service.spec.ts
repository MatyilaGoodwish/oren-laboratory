import { TestBed } from '@angular/core/testing';

import { LoginSvcService } from './login-svc.service';

describe('LoginSvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginSvcService = TestBed.get(LoginSvcService);
    expect(service).toBeTruthy();
  });
});
