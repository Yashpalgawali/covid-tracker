import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcovcenwardtypesComponent } from './viewcovcenwardtypes.component';

describe('ViewcovcenwardtypesComponent', () => {
  let component: ViewcovcenwardtypesComponent;
  let fixture: ComponentFixture<ViewcovcenwardtypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcovcenwardtypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcovcenwardtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
