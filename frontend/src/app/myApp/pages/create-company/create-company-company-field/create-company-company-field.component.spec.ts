import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyCompanyFieldComponent } from './create-company-company-field.component';

describe('CreateCompanyCompanyFieldComponent', () => {
  let component: CreateCompanyCompanyFieldComponent;
  let fixture: ComponentFixture<CreateCompanyCompanyFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompanyCompanyFieldComponent]
    });
    fixture = TestBed.createComponent(CreateCompanyCompanyFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
