import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceRulesComponent } from './create-service-rules.component';

describe('CreateServiceRulesComponent', () => {
  let component: CreateServiceRulesComponent;
  let fixture: ComponentFixture<CreateServiceRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceRulesComponent]
    });
    fixture = TestBed.createComponent(CreateServiceRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
