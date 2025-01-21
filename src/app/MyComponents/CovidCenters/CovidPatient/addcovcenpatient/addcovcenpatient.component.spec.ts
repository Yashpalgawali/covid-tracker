import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcovcenpatientComponent } from './addcovcenpatient.component';

describe('AddcovcenpatientComponent', () => {
  let component: AddcovcenpatientComponent;
  let fixture: ComponentFixture<AddcovcenpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcovcenpatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcovcenpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
