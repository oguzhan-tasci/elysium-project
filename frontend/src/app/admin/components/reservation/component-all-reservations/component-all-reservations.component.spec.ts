import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAllReservationsComponent } from './component-all-reservations.component';

describe('ComponentAllReservationsComponent', () => {
  let component: ComponentAllReservationsComponent;
  let fixture: ComponentFixture<ComponentAllReservationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentAllReservationsComponent]
    });
    fixture = TestBed.createComponent(ComponentAllReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
