import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyHappyCustomersComponent } from './company-happy-customers.component';

describe('CompanyHappyCustomersComponent', () => {
  let component: CompanyHappyCustomersComponent;
  let fixture: ComponentFixture<CompanyHappyCustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyHappyCustomersComponent]
    });
    fixture = TestBed.createComponent(CompanyHappyCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
