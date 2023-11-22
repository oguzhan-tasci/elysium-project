import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentListOfServicesComponent } from './component-list-of-services.component';

describe('ComponentListOfServicesComponent', () => {
  let component: ComponentListOfServicesComponent;
  let fixture: ComponentFixture<ComponentListOfServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentListOfServicesComponent]
    });
    fixture = TestBed.createComponent(ComponentListOfServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
