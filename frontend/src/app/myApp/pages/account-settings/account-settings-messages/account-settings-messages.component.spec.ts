import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsMessagesComponent } from './account-settings-messages.component';

describe('AccountSettingsMessagesComponent', () => {
  let component: AccountSettingsMessagesComponent;
  let fixture: ComponentFixture<AccountSettingsMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountSettingsMessagesComponent]
    });
    fixture = TestBed.createComponent(AccountSettingsMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
