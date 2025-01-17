import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcovidcenterdepartmentComponent } from './addcovidcenterdepartment.component';

describe('AddcovidcenterdepartmentComponent', () => {
  let component: AddcovidcenterdepartmentComponent;
  let fixture: ComponentFixture<AddcovidcenterdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcovidcenterdepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcovidcenterdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
