import { TestBed } from '@angular/core/testing';

import { CovidcenpatientService } from './covidcenpatient.service';

describe('CovidcenpatientService', () => {
  let service: CovidcenpatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidcenpatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
