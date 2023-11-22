import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyTitleComponent } from './create-company-title.component';

describe('CreateCompanyTitleComponent', () => {
  let component: CreateCompanyTitleComponent;
  let fixture: ComponentFixture<CreateCompanyTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompanyTitleComponent]
    });
    fixture = TestBed.createComponent(CreateCompanyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
