import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCommentsComponent } from './company-comments.component';

describe('CompanyCommentsComponent', () => {
  let component: CompanyCommentsComponent;
  let fixture: ComponentFixture<CompanyCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyCommentsComponent]
    });
    fixture = TestBed.createComponent(CompanyCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
