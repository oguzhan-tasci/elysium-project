import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsHomepageComponent } from './account-settings-homepage.component';

describe('AccountSettingsHomepageComponent', () => {
  let component: AccountSettingsHomepageComponent;
  let fixture: ComponentFixture<AccountSettingsHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountSettingsHomepageComponent]
    });
    fixture = TestBed.createComponent(AccountSettingsHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
