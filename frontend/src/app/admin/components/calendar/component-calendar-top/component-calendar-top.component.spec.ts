import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCalendarTopComponent } from './component-calendar-top.component';

describe('ComponentCalendarTopComponent', () => {
  let component: ComponentCalendarTopComponent;
  let fixture: ComponentFixture<ComponentCalendarTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentCalendarTopComponent]
    });
    fixture = TestBed.createComponent(ComponentCalendarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
