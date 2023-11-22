import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSummaryComponent } from './comment-summary.component';

describe('CommentSummaryComponent', () => {
  let component: CommentSummaryComponent;
  let fixture: ComponentFixture<CommentSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentSummaryComponent]
    });
    fixture = TestBed.createComponent(CommentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
