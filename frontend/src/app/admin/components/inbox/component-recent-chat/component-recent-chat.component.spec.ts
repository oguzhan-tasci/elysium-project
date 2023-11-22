import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRecentChatComponent } from './component-recent-chat.component';

describe('ComponentRecentChatComponent', () => {
  let component: ComponentRecentChatComponent;
  let fixture: ComponentFixture<ComponentRecentChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentRecentChatComponent]
    });
    fixture = TestBed.createComponent(ComponentRecentChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
