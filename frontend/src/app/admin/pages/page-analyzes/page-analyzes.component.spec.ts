import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnalyzesComponent } from './page-analyzes.component';

describe('PageAnalyzesComponent', () => {
  let component: PageAnalyzesComponent;
  let fixture: ComponentFixture<PageAnalyzesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAnalyzesComponent]
    });
    fixture = TestBed.createComponent(PageAnalyzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
