import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceDescriptionComponent } from './create-service-description.component';

describe('CreateServiceDescriptionComponent', () => {
  let component: CreateServiceDescriptionComponent;
  let fixture: ComponentFixture<CreateServiceDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceDescriptionComponent]
    });
    fixture = TestBed.createComponent(CreateServiceDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
