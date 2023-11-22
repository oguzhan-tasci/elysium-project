import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceDoneComponent } from './create-service-done.component';

describe('CreateServiceDoneComponent', () => {
  let component: CreateServiceDoneComponent;
  let fixture: ComponentFixture<CreateServiceDoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceDoneComponent]
    });
    fixture = TestBed.createComponent(CreateServiceDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
