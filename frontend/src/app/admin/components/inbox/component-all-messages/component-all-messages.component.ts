import { Component } from '@angular/core';

@Component({
  selector: 'inbox-component-all-messages',
  templateUrl: './component-all-messages.component.html',
  styleUrls: ['./component-all-messages.component.css'],
})
export class ComponentAllMessagesComponent {
  messages = [];
  
  ngOnInit() {
    this.messages = [
      {
        id: 1,
        avatarUrl:
          'https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png',
        name: 'Beckhy Lench',
        minutes: '16 minutes ago',
        message: 'Hello Sir! I want to learn something about visa to Turkey.',
      },
      {
        id: 2,
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png',
        name: 'Seth Rollins',
        minutes: '21 minutes ago',
        message:
          'Hello MedicalPark. I will come from United Kingdom but I have a little problem.',
      },
      {
        id: 3,
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png',
        name: 'Cody Rhodes',
        minutes: '43 minutes ago',
        message:
          'Hi. I have a friend but he want to be surgered with me, you have any leisure time?',
      },
      {
        id: 4,
        avatarUrl:
          'data:image/png;base64,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',
        name: 'Stephanie McMahon',
        minutes: '53 minutes ago',
        message:
          'Hi. I had a plastic surgery but I started scratching my nose. What is happening?',
      },
      {
        id: 5,
        avatarUrl:
          'https://static.vecteezy.com/system/resources/previews/004/476/164/original/young-man-avatar-character-icon-free-vector.jpg',
        name: 'Roman Reigns',
        minutes: '1 hours ago',
        message:
          "Hi, As soon as I turn my country, I realized I've lost my wallet. Did you see it?",
      },
      {
        id: 5,
        avatarUrl:
          'https://static.vecteezy.com/system/resources/previews/004/476/164/original/young-man-avatar-character-icon-free-vector.jpg',
        name: 'Roman Reigns',
        minutes: '1 hours ago',
        message:
          "Hi, As soon as I turn my country, I realized I've lost my wallet. Did you see it?",
      },
      {
        id: 5,
        avatarUrl:
          'https://static.vecteezy.com/system/resources/previews/004/476/164/original/young-man-avatar-character-icon-free-vector.jpg',
        name: 'Roman Reigns',
        minutes: '1 hours ago',
        message:
          "Hi, As soon as I turn my country, I realized I've lost my wallet. Did you see it?",
      },
    ];
  }
}
