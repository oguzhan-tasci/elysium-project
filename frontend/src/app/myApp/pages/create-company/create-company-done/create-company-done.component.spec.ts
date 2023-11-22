import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyDoneComponent } from './create-company-done.component';

describe('CreateCompanyDoneComponent', () => {
  let component: CreateCompanyDoneComponent;
  let fixture: ComponentFixture<CreateCompanyDoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompanyDoneComponent]
    });
    fixture = TestBed.createComponent(CreateCompanyDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
