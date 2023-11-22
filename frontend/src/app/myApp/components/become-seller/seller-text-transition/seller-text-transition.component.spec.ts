import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerTextTransitionComponent } from './seller-text-transition.component';

describe('SellerTextTransitionComponent', () => {
  let component: SellerTextTransitionComponent;
  let fixture: ComponentFixture<SellerTextTransitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerTextTransitionComponent]
    });
    fixture = TestBed.createComponent(SellerTextTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
