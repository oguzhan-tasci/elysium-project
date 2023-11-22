import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentByCountriesComponent } from './component-by-countries.component';

describe('ComponentByCountriesComponent', () => {
  let component: ComponentByCountriesComponent;
  let fixture: ComponentFixture<ComponentByCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentByCountriesComponent]
    });
    fixture = TestBed.createComponent(ComponentByCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
