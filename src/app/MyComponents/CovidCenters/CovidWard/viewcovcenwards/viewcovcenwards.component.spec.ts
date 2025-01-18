import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcovcenwardsComponent } from './viewcovcenwards.component';

describe('ViewcovcenwardsComponent', () => {
  let component: ViewcovcenwardsComponent;
  let fixture: ComponentFixture<ViewcovcenwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcovcenwardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcovcenwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
