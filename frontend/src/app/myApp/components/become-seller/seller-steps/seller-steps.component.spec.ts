import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerStepsComponent } from './seller-steps.component';

describe('SellerStepsComponent', () => {
  let component: SellerStepsComponent;
  let fixture: ComponentFixture<SellerStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerStepsComponent]
    });
    fixture = TestBed.createComponent(SellerStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
