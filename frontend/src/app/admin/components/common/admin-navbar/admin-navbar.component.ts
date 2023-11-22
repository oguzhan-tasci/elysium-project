import { Component } from '@angular/core';

@Component({
  selector: 'admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css'],
})
export class AdminNavbarComponent {
  menu = [];
  visible : boolean = false;
  notifications = [];
  showDialog() {
    this.visible = true;
  }

  ngOnInit() {
    this.menu = [
      {
        id: 1,
        link: '/hosting',
        value: 'Dashboard',
      },
      {
        id: 2,
        link: 'calendar',
        value: 'Takvim',
      },
      {
        id: 3,
        link: 'reservations',
        value: 'Rezervasyonlar',
      },
      {
        id: 4,
        link: 'inbox',
        value: 'Mesajlar',
      },
      {
        id: 5,
        link: 'services',
        value: 'Servisler',
      },
    ];

    this.notifications = [
      {
        id: 1,
        personName: 'Seth Rollins',
        personAvatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556520.png',
        title: 'The most popular place for rhinoplasty is MedicalPark',
        subtitle:
          'You can immediately tell her/him about your services and provide her/him with a discount coupon!',
        time: '14 min ago',
        serviceImage:
          'https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      },
      {
        id: 2,
        personName: 'Randy Orton',
        personAvatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556558.png',
        title:
          'The best way to perform hair transplantation quickly and safely',
        subtitle:
          'You can immediately tell her/him about your services and provide her/him with a discount coupon!',
        time: '20 min ago',
        serviceImage:
          'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80',
      },
      {
        id: 3,
        personName: 'John Cena',
        personAvatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556539.png',
        title: 'The safest procedure for gastric surgery',
        subtitle:
          'You can immediately tell her/him about your services and provide her/him with a discount coupon!',
        time: '35 min ago',
        serviceImage:
          'https://plus.unsplash.com/premium_photo-1664475477169-46b784084d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      },
      {
        id: 4,
        personName: 'Brave Heart',
        personAvatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556529.png',
        title: 'The best address for your teeth, we guarantee!',
        subtitle:
          'You can immediately tell her/him about your services and provide her/him with a discount coupon!',
        time: '40 min ago',
        serviceImage:
          'https://plus.unsplash.com/premium_photo-1675686363460-25aa1039e94b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80',
      },
    ];
  }
}
