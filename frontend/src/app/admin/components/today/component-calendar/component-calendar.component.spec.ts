import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCalendarComponent } from './component-calendar.component';

describe('ComponentCalendarComponent', () => {
  let component: ComponentCalendarComponent;
  let fixture: ComponentFixture<ComponentCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentCalendarComponent]
    });
    fixture = TestBed.createComponent(ComponentCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
