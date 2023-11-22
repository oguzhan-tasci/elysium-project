import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentReservationComponent } from './component-reservation.component';

describe('ComponentReservationComponent', () => {
  let component: ComponentReservationComponent;
  let fixture: ComponentFixture<ComponentReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentReservationComponent]
    });
    fixture = TestBed.createComponent(ComponentReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
