import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouNeedToKnowComponent } from './you-need-to-know.component';

describe('YouNeedToKnowComponent', () => {
  let component: YouNeedToKnowComponent;
  let fixture: ComponentFixture<YouNeedToKnowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YouNeedToKnowComponent]
    });
    fixture = TestBed.createComponent(YouNeedToKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
