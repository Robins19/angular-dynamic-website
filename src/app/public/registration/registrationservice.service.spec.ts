import { TestBed } from '@angular/core/testing';

import { RegistrationserviceService } from './registrationservice.service';

describe('RegistrationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationserviceService = TestBed.get(RegistrationserviceService);
    expect(service).toBeTruthy();
  });
});
