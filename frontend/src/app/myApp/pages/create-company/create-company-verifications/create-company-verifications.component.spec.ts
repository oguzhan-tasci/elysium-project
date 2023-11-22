import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyVerificationsComponent } from './create-company-verifications.component';

describe('CreateCompanyVerificationsComponent', () => {
  let component: CreateCompanyVerificationsComponent;
  let fixture: ComponentFixture<CreateCompanyVerificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompanyVerificationsComponent]
    });
    fixture = TestBed.createComponent(CreateCompanyVerificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
