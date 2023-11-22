import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServicePricingComponent } from './create-service-pricing.component';

describe('CreateServicePricingComponent', () => {
  let component: CreateServicePricingComponent;
  let fixture: ComponentFixture<CreateServicePricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServicePricingComponent]
    });
    fixture = TestBed.createComponent(CreateServicePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
