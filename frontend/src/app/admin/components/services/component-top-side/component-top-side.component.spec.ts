import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTopSideComponent } from './component-top-side.component';

describe('ComponentTopSideComponent', () => {
  let component: ComponentTopSideComponent;
  let fixture: ComponentFixture<ComponentTopSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentTopSideComponent]
    });
    fixture = TestBed.createComponent(ComponentTopSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
