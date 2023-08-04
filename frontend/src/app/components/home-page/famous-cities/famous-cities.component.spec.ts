import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousCitiesComponent } from './famous-cities.component';

describe('FamousCitiesComponent', () => {
  let component: FamousCitiesComponent;
  let fixture: ComponentFixture<FamousCitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamousCitiesComponent]
    });
    fixture = TestBed.createComponent(FamousCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
