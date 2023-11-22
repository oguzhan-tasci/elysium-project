import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsFavoritesComponent } from './account-settings-favorites.component';

describe('AccountSettingsFavoritesComponent', () => {
  let component: AccountSettingsFavoritesComponent;
  let fixture: ComponentFixture<AccountSettingsFavoritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountSettingsFavoritesComponent]
    });
    fixture = TestBed.createComponent(AccountSettingsFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
