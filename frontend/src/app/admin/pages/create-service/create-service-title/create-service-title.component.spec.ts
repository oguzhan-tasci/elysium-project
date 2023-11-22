import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceTitleComponent } from './create-service-title.component';

describe('CreateServiceTitleComponent', () => {
  let component: CreateServiceTitleComponent;
  let fixture: ComponentFixture<CreateServiceTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceTitleComponent]
    });
    fixture = TestBed.createComponent(CreateServiceTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
