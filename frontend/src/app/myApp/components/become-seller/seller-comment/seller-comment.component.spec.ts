import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCommentComponent } from './seller-comment.component';

describe('SellerCommentComponent', () => {
  let component: SellerCommentComponent;
  let fixture: ComponentFixture<SellerCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerCommentComponent]
    });
    fixture = TestBed.createComponent(SellerCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
