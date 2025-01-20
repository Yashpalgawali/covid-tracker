import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcovcendoctorComponent } from './addcovcendoctor.component';

describe('AddcovcendoctorComponent', () => {
  let component: AddcovcendoctorComponent;
  let fixture: ComponentFixture<AddcovcendoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcovcendoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcovcendoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
