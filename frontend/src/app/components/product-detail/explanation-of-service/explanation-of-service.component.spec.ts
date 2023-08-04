import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationOfServiceComponent } from './explanation-of-service.component';

describe('ExplanationOfServiceComponent', () => {
  let component: ExplanationOfServiceComponent;
  let fixture: ComponentFixture<ExplanationOfServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExplanationOfServiceComponent]
    });
    fixture = TestBed.createComponent(ExplanationOfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
