import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceImagesComponent } from './create-service-images.component';

describe('CreateServiceImagesComponent', () => {
  let component: CreateServiceImagesComponent;
  let fixture: ComponentFixture<CreateServiceImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceImagesComponent]
    });
    fixture = TestBed.createComponent(CreateServiceImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
