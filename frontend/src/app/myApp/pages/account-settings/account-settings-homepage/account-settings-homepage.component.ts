import { Component } from '@angular/core';

@Component({
  selector: 'app-account-settings-homepage',
  templateUrl: './account-settings-homepage.component.html',
  styleUrls: ['./account-settings-homepage.component.css'],
})
export class AccountSettingsHomepageComponent {
  boxes = [];

  ngOnInit() {
    this.boxes = [
      {
        id: 1,
        routerLink: 'personal-info',
        iconClass: 'text-2xl mb-3 pi pi-user text-gray-900',
        title: 'Personal Informations',
        subtitle: 'Specify your personal information and how we can reach you',
      },
      {
        id: 2,
        routerLink: 'appointments',
        iconClass: 'text-2xl mb-3 pi pi-book  text-gray-900',
        title: 'Appointments',
        subtitle: 'View your appointments and see their details',
      },
      {
        id: 3,
        routerLink: 'favorites',
        iconClass: 'text-2xl mb-3 pi pi-heart  text-gray-900',
        title: 'Favorites',
        subtitle: 'Save the services you love and be ready for notifications',
      },
      {
        id: 4,
        routerLink: 'messages',
        iconClass: 'text-2xl mb-3 pi pi-envelope  text-gray-900',
        title: 'Messages',
        subtitle:
          'Reply to all your messages, view them or receive/reject offers',
      },
      {
        id: 5,
        routerLink: 'security',
        iconClass: 'text-2xl mb-3 pi pi-key  text-gray-900',
        title: 'Login and security',
        subtitle: 'Keep your password strong and secure your account',
      },
      {
        id: 6,
        routerLink: 'preferences',
        iconClass: 'text-2xl mb-3 pi pi-globe  text-gray-900',
        title: 'General Preferences',
        subtitle: 'Set your default language, currency and timezone',
      },
    ];
  }
}
