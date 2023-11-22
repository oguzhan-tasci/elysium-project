import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceNavbarComponent } from './create-service-navbar.component';

describe('CreateServiceNavbarComponent', () => {
  let component: CreateServiceNavbarComponent;
  let fixture: ComponentFixture<CreateServiceNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceNavbarComponent]
    });
    fixture = TestBed.createComponent(CreateServiceNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
