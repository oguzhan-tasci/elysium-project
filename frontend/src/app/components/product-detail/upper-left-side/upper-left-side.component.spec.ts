import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperLeftSideComponent } from './upper-left-side.component';

describe('UpperLeftSideComponent', () => {
  let component: UpperLeftSideComponent;
  let fixture: ComponentFixture<UpperLeftSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperLeftSideComponent]
    });
    fixture = TestBed.createComponent(UpperLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
