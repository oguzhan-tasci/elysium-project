import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyCountryComponent } from './create-company-country.component';

describe('CreateCompanyCountryComponent', () => {
  let component: CreateCompanyCountryComponent;
  let fixture: ComponentFixture<CreateCompanyCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompanyCountryComponent]
    });
    fixture = TestBed.createComponent(CreateCompanyCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
