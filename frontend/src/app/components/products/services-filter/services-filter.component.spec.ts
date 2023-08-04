import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFilterComponent } from './services-filter.component';

describe('ServicesFilterComponent', () => {
  let component: ServicesFilterComponent;
  let fixture: ComponentFixture<ServicesFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesFilterComponent]
    });
    fixture = TestBed.createComponent(ServicesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
