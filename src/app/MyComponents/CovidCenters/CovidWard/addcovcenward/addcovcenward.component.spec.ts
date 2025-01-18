import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcovcenwardComponent } from './addcovcenward.component';

describe('AddcovcenwardComponent', () => {
  let component: AddcovcenwardComponent;
  let fixture: ComponentFixture<AddcovcenwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcovcenwardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcovcenwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
