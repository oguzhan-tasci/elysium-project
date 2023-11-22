import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceTeammatesComponent } from './create-service-teammates.component';

describe('CreateServiceTeammatesComponent', () => {
  let component: CreateServiceTeammatesComponent;
  let fixture: ComponentFixture<CreateServiceTeammatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceTeammatesComponent]
    });
    fixture = TestBed.createComponent(CreateServiceTeammatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
