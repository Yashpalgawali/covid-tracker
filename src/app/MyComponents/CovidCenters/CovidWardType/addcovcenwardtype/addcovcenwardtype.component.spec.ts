import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcovcenwardtypeComponent } from './addcovcenwardtype.component';

describe('AddcovcenwardtypeComponent', () => {
  let component: AddcovcenwardtypeComponent;
  let fixture: ComponentFixture<AddcovcenwardtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcovcenwardtypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcovcenwardtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
