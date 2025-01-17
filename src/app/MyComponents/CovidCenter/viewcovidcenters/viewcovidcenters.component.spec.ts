import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcovidcentersComponent } from './viewcovidcenters.component';

describe('ViewcovidcentersComponent', () => {
  let component: ViewcovidcentersComponent;
  let fixture: ComponentFixture<ViewcovidcentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcovidcentersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcovidcentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
