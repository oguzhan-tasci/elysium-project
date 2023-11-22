import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesMapComponent } from './favorites-map.component';

describe('FavoritesMapComponent', () => {
  let component: FavoritesMapComponent;
  let fixture: ComponentFixture<FavoritesMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesMapComponent]
    });
    fixture = TestBed.createComponent(FavoritesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
