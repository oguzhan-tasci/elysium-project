import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceRegistrationComponent } from './create-service-registration.component';

describe('CreateServiceRegistrationComponent', () => {
  let component: CreateServiceRegistrationComponent;
  let fixture: ComponentFixture<CreateServiceRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceRegistrationComponent]
    });
    fixture = TestBed.createComponent(CreateServiceRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
