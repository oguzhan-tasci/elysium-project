import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyDetailsComponent } from './create-company-details.component';

describe('CreateCompanyDetailsComponent', () => {
  let component: CreateCompanyDetailsComponent;
  let fixture: ComponentFixture<CreateCompanyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompanyDetailsComponent]
    });
    fixture = TestBed.createComponent(CreateCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
