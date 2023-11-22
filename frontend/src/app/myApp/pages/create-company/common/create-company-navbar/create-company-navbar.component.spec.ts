import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyNavbarComponent } from './create-company-navbar.component';

describe('CreateCompanyNavbarComponent', () => {
  let component: CreateCompanyNavbarComponent;
  let fixture: ComponentFixture<CreateCompanyNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompanyNavbarComponent]
    });
    fixture = TestBed.createComponent(CreateCompanyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
