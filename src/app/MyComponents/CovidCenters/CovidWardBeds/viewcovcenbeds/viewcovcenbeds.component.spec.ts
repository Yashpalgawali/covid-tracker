import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcovcenbedsComponent } from './viewcovcenbeds.component';

describe('ViewcovcenbedsComponent', () => {
  let component: ViewcovcenbedsComponent;
  let fixture: ComponentFixture<ViewcovcenbedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcovcenbedsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcovcenbedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
