import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentReservationTopSideComponent } from './component-reservation-top-side.component';

describe('ComponentReservationTopSideComponent', () => {
  let component: ComponentReservationTopSideComponent;
  let fixture: ComponentFixture<ComponentReservationTopSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentReservationTopSideComponent]
    });
    fixture = TestBed.createComponent(ComponentReservationTopSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
