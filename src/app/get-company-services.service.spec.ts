import { TestBed } from '@angular/core/testing';

import { GetCompanyServicesService } from './get-company-services.service';

describe('GetCompanyServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCompanyServicesService = TestBed.get(GetCompanyServicesService);
    expect(service).toBeTruthy();
  });
});
