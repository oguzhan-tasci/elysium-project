import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTipsComponent } from './component-tips.component';

describe('ComponentTipsComponent', () => {
  let component: ComponentTipsComponent;
  let fixture: ComponentFixture<ComponentTipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentTipsComponent]
    });
    fixture = TestBed.createComponent(ComponentTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
