import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcovcendoctorsComponent } from './viewcovcendoctors.component';

describe('ViewcovcendoctorsComponent', () => {
  let component: ViewcovcendoctorsComponent;
  let fixture: ComponentFixture<ViewcovcendoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcovcendoctorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcovcendoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
