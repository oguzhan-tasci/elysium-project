import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCalendarComponent } from './page-calendar.component';

describe('PageCalendarComponent', () => {
  let component: PageCalendarComponent;
  let fixture: ComponentFixture<PageCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCalendarComponent]
    });
    fixture = TestBed.createComponent(PageCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
