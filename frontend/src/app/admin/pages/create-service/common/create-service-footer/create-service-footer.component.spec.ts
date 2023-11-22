import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceFooterComponent } from './create-service-footer.component';

describe('CreateServiceFooterComponent', () => {
  let component: CreateServiceFooterComponent;
  let fixture: ComponentFixture<CreateServiceFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceFooterComponent]
    });
    fixture = TestBed.createComponent(CreateServiceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
