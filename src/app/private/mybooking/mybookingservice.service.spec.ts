import { TestBed } from '@angular/core/testing';

import { MybookingserviceService } from './mybookingservice.service';

describe('MybookingserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MybookingserviceService = TestBed.get(MybookingserviceService);
    expect(service).toBeTruthy();
  });
});
