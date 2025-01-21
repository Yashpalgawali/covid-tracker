import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcovcenpatientComponent } from './viewcovcenpatient.component';

describe('ViewcovcenpatientComponent', () => {
  let component: ViewcovcenpatientComponent;
  let fixture: ComponentFixture<ViewcovcenpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcovcenpatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcovcenpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
