import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationForUsersComponent } from './information-for-users.component';

describe('InformationForUsersComponent', () => {
  let component: InformationForUsersComponent;
  let fixture: ComponentFixture<InformationForUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationForUsersComponent]
    });
    fixture = TestBed.createComponent(InformationForUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
