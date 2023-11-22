import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoKnowledgesComponent } from './personal-info-knowledges.component';

describe('PersonalInfoKnowledgesComponent', () => {
  let component: PersonalInfoKnowledgesComponent;
  let fixture: ComponentFixture<PersonalInfoKnowledgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInfoKnowledgesComponent]
    });
    fixture = TestBed.createComponent(PersonalInfoKnowledgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
