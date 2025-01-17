import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcovidcenterComponent } from './addcovidcenter.component';

describe('AddcovidcenterComponent', () => {
  let component: AddcovidcenterComponent;
  let fixture: ComponentFixture<AddcovidcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcovidcenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcovidcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
