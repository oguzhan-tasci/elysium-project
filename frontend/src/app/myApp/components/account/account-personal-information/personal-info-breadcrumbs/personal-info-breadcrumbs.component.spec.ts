import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoBreadcrumbsComponent } from './personal-info-breadcrumbs.component';

describe('PersonalInfoBreadcrumbsComponent', () => {
  let component: PersonalInfoBreadcrumbsComponent;
  let fixture: ComponentFixture<PersonalInfoBreadcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInfoBreadcrumbsComponent]
    });
    fixture = TestBed.createComponent(PersonalInfoBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
