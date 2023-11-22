import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerGetStartedComponent } from './seller-get-started.component';

describe('SellerGetStartedComponent', () => {
  let component: SellerGetStartedComponent;
  let fixture: ComponentFixture<SellerGetStartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerGetStartedComponent]
    });
    fixture = TestBed.createComponent(SellerGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
