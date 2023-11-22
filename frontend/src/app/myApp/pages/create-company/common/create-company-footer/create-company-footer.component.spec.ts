import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyFooterComponent } from './create-company-footer.component';

describe('CreateCompanyFooterComponent', () => {
  let component: CreateCompanyFooterComponent;
  let fixture: ComponentFixture<CreateCompanyFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompanyFooterComponent]
    });
    fixture = TestBed.createComponent(CreateCompanyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
