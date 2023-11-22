import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTodayComponent } from './page-today.component';

describe('PageTodayComponent', () => {
  let component: PageTodayComponent;
  let fixture: ComponentFixture<PageTodayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTodayComponent]
    });
    fixture = TestBed.createComponent(PageTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
