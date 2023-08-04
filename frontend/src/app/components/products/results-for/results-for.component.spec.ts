import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsForComponent } from './results-for.component';

describe('ResultsForComponent', () => {
  let component: ResultsForComponent;
  let fixture: ComponentFixture<ResultsForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsForComponent]
    });
    fixture = TestBed.createComponent(ResultsForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
