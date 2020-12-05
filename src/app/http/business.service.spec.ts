import { TestBed } from '@angular/core/testing';

import { businessService } from './business.service';

describe('BusinessService', () => {
  let service: businessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(businessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
