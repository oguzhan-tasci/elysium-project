import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesListOfServicesComponent } from './favorites-list-of-services.component';

describe('FavoritesListOfServicesComponent', () => {
  let component: FavoritesListOfServicesComponent;
  let fixture: ComponentFixture<FavoritesListOfServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesListOfServicesComponent]
    });
    fixture = TestBed.createComponent(FavoritesListOfServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
