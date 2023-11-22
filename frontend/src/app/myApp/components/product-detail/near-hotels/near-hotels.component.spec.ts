import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearHotelsComponent } from './near-hotels.component';

describe('NearHotelsComponent', () => {
  let component: NearHotelsComponent;
  let fixture: ComponentFixture<NearHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NearHotelsComponent]
    });
    fixture = TestBed.createComponent(NearHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
