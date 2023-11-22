import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsAppointmentsComponent } from './account-settings-appointments.component';

describe('AccountSettingsAppointmentsComponent', () => {
  let component: AccountSettingsAppointmentsComponent;
  let fixture: ComponentFixture<AccountSettingsAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountSettingsAppointmentsComponent]
    });
    fixture = TestBed.createComponent(AccountSettingsAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
