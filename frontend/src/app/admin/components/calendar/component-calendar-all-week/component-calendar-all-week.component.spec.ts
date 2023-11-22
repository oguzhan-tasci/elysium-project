import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCalendarAllWeekComponent } from './component-calendar-all-week.component';

describe('ComponentCalendarAllWeekComponent', () => {
  let component: ComponentCalendarAllWeekComponent;
  let fixture: ComponentFixture<ComponentCalendarAllWeekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentCalendarAllWeekComponent]
    });
    fixture = TestBed.createComponent(ComponentCalendarAllWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
