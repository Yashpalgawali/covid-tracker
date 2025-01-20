import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcovcenbedComponent } from './addcovcenbed.component';

describe('AddcovcenbedComponent', () => {
  let component: AddcovcenbedComponent;
  let fixture: ComponentFixture<AddcovcenbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcovcenbedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcovcenbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
