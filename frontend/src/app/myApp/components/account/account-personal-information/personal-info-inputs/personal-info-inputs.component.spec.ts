import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoInputsComponent } from './personal-info-inputs.component';

describe('PersonalInfoInputsComponent', () => {
  let component: PersonalInfoInputsComponent;
  let fixture: ComponentFixture<PersonalInfoInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInfoInputsComponent]
    });
    fixture = TestBed.createComponent(PersonalInfoInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
