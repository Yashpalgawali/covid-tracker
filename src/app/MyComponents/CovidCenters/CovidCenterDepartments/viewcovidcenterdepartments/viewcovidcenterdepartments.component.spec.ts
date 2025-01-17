import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcovidcenterdepartmentsComponent } from './viewcovidcenterdepartments.component';

describe('ViewcovidcenterdepartmentsComponent', () => {
  let component: ViewcovidcenterdepartmentsComponent;
  let fixture: ComponentFixture<ViewcovidcenterdepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcovidcenterdepartmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcovidcenterdepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
