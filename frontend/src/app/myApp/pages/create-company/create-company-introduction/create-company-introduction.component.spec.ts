import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyIntroductionComponent } from './create-company-introduction.component';

describe('CreateCompanyIntroductionComponent', () => {
  let component: CreateCompanyIntroductionComponent;
  let fixture: ComponentFixture<CreateCompanyIntroductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompanyIntroductionComponent]
    });
    fixture = TestBed.createComponent(CreateCompanyIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
