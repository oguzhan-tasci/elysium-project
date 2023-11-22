import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerBenefitsComponent } from './seller-benefits.component';

describe('SellerBenefitsComponent', () => {
  let component: SellerBenefitsComponent;
  let fixture: ComponentFixture<SellerBenefitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerBenefitsComponent]
    });
    fixture = TestBed.createComponent(SellerBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
