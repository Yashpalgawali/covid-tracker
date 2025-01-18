import { TestBed } from '@angular/core/testing';

import { CovcenwardService } from './covcenward.service';

describe('CovcenwardService', () => {
  let service: CovcenwardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovcenwardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
