import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyLogoComponent } from './create-company-logo.component';

describe('CreateCompanyLogoComponent', () => {
  let component: CreateCompanyLogoComponent;
  let fixture: ComponentFixture<CreateCompanyLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompanyLogoComponent]
    });
    fixture = TestBed.createComponent(CreateCompanyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
