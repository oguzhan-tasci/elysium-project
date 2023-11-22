import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAboutPersonComponent } from './component-about-person.component';

describe('ComponentAboutPersonComponent', () => {
  let component: ComponentAboutPersonComponent;
  let fixture: ComponentFixture<ComponentAboutPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentAboutPersonComponent]
    });
    fixture = TestBed.createComponent(ComponentAboutPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
