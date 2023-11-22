import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsBreadcrumbsComponent } from './appointments-breadcrumbs.component';

describe('AppointmentsBreadcrumbsComponent', () => {
  let component: AppointmentsBreadcrumbsComponent;
  let fixture: ComponentFixture<AppointmentsBreadcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentsBreadcrumbsComponent]
    });
    fixture = TestBed.createComponent(AppointmentsBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
