import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerQaComponent } from './seller-qa.component';

describe('SellerQaComponent', () => {
  let component: SellerQaComponent;
  let fixture: ComponentFixture<SellerQaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerQaComponent]
    });
    fixture = TestBed.createComponent(SellerQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
