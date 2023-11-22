import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStoriesComponent } from './real-stories.component';

describe('RealStoriesComponent', () => {
  let component: RealStoriesComponent;
  let fixture: ComponentFixture<RealStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealStoriesComponent]
    });
    fixture = TestBed.createComponent(RealStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
