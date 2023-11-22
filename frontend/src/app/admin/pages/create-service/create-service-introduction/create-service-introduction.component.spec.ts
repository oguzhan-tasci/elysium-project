import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceIntroductionComponent } from './create-service-introduction.component';

describe('CreateServiceIntroductionComponent', () => {
  let component: CreateServiceIntroductionComponent;
  let fixture: ComponentFixture<CreateServiceIntroductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceIntroductionComponent]
    });
    fixture = TestBed.createComponent(CreateServiceIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
