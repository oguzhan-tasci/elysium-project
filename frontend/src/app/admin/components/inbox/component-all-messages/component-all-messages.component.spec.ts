import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAllMessagesComponent } from './component-all-messages.component';

describe('ComponentAllMessagesComponent', () => {
  let component: ComponentAllMessagesComponent;
  let fixture: ComponentFixture<ComponentAllMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentAllMessagesComponent]
    });
    fixture = TestBed.createComponent(ComponentAllMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
