import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTeammatesComponent } from './section-teammates.component';

describe('SectionTeammatesComponent', () => {
  let component: SectionTeammatesComponent;
  let fixture: ComponentFixture<SectionTeammatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionTeammatesComponent]
    });
    fixture = TestBed.createComponent(SectionTeammatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
