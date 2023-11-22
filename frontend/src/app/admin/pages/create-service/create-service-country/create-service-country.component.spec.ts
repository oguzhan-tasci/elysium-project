import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceCountryComponent } from './create-service-country.component';

describe('CreateServiceCountryComponent', () => {
  let component: CreateServiceCountryComponent;
  let fixture: ComponentFixture<CreateServiceCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceCountryComponent]
    });
    fixture = TestBed.createComponent(CreateServiceCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
