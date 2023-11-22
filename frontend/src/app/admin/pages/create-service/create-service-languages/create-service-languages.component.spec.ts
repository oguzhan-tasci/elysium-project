import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceLanguagesComponent } from './create-service-languages.component';

describe('CreateServiceLanguagesComponent', () => {
  let component: CreateServiceLanguagesComponent;
  let fixture: ComponentFixture<CreateServiceLanguagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceLanguagesComponent]
    });
    fixture = TestBed.createComponent(CreateServiceLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
