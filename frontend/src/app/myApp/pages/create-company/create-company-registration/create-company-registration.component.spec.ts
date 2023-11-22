import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyRegistrationComponent } from './create-company-registration.component';

describe('CreateCompanyRegistrationComponent', () => {
  let component: CreateCompanyRegistrationComponent;
  let fixture: ComponentFixture<CreateCompanyRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompanyRegistrationComponent]
    });
    fixture = TestBed.createComponent(CreateCompanyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
