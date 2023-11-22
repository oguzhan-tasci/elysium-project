import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceDetailAdressComponent } from './create-service-detail-adress.component';

describe('CreateServiceDetailAdressComponent', () => {
  let component: CreateServiceDetailAdressComponent;
  let fixture: ComponentFixture<CreateServiceDetailAdressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServiceDetailAdressComponent]
    });
    fixture = TestBed.createComponent(CreateServiceDetailAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
