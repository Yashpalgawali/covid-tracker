import { TestBed } from '@angular/core/testing';

import { CovidcenterbedService } from './covidcenterbed.service';

describe('CovidcenterbedService', () => {
  let service: CovidcenterbedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidcenterbedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
