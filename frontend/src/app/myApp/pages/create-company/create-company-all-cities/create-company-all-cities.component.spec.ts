import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyAllCitiesComponent } from './create-company-all-cities.component';

describe('CreateCompanyAllCitiesComponent', () => {
  let component: CreateCompanyAllCitiesComponent;
  let fixture: ComponentFixture<CreateCompanyAllCitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompanyAllCitiesComponent]
    });
    fixture = TestBed.createComponent(CreateCompanyAllCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
