import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesBreadcrumbsComponent } from './favorites-breadcrumbs.component';

describe('FavoritesBreadcrumbsComponent', () => {
  let component: FavoritesBreadcrumbsComponent;
  let fixture: ComponentFixture<FavoritesBreadcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesBreadcrumbsComponent]
    });
    fixture = TestBed.createComponent(FavoritesBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
