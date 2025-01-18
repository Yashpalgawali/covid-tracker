import { TestBed } from '@angular/core/testing';

import { CovcenterwardtypeService } from './covcenterwardtype.service';

describe('CovcenterwardtypeService', () => {
  let service: CovcenterwardtypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovcenterwardtypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
