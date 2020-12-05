import { TestBed } from '@angular/core/testing';

import { servicesService } from './services.service';

describe('ServicesService', () => {
  let service: servicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(servicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
