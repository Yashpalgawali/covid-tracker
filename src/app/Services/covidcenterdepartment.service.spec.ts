import { TestBed } from '@angular/core/testing';

import { CovidcenterdepartmentService } from './covidcenterdepartment.service';

describe('CovidcenterdepartmentService', () => {
  let service: CovidcenterdepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidcenterdepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
