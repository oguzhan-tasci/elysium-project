import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceLocationMapComponent } from './create-service-location-map.component';

describe('CreateServiceLocationMapComponent', () => {
  let component: CreateServiceLocationMapComponent;
  let fixture: ComponentFixture<CreateServiceLocationMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceLocationMapComponent]
    });
    fixture = TestBed.createComponent(CreateServiceLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
