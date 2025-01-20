import { TestBed } from '@angular/core/testing';

import { CovidCenterDoctorService } from './covid-center-doctor.service';

describe('CovidCenterDoctorService', () => {
  let service: CovidCenterDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidCenterDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
