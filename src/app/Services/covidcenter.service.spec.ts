import { TestBed } from '@angular/core/testing';

import { CovidcenterService } from './covidcenter.service';

describe('CovidcenterService', () => {
  let service: CovidcenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidcenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
