import { Component } from '@angular/core';

@Component({
  selector: 'inbox-component-chat',
  templateUrl: './component-chat.component.html',
  styleUrls: ['./component-chat.component.css'],
})
export class ComponentChatComponent {
  messages = [];

  ngOnInit() {
    this.messages = [
      {
        id: 1,
        avatarUrl:
          'https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png',
        name: 'Beckhy Lench',
        minutes: '13:38',
        message:
          'Hello Sir! I want to learn something about visa to Turkey. How can we handle with this problem? Perhaps, you can help us..',
      },
      {
        id: 2,
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png',
        name: 'Seth Rollins',
        minutes: '14:07',
        message:
          "Hi! We understood your problem but I don't think so we can find any solution because it's not about us, it's related with country situation.",
      },
      {
        id: 2,
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png',
        name: 'Seth Rollins',
        minutes: '14:07',
        message:
          "Hi! We understood your problem but I don't think so we can find any solution because it's not about us, it's related with country situation.",
      },
      {
        id: 2,
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png',
        name: 'Seth Rollins',
        minutes: '14:07',
        message:
          "Hi! We understood your problem but I don't think so we can find any solution because it's not about us, it's related with country situation.",
      },
    ];
  }
}
