import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsPersonalInfoComponent } from './account-settings-personal-info.component';

describe('AccountSettingsPersonalInfoComponent', () => {
  let component: AccountSettingsPersonalInfoComponent;
  let fixture: ComponentFixture<AccountSettingsPersonalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountSettingsPersonalInfoComponent]
    });
    fixture = TestBed.createComponent(AccountSettingsPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
