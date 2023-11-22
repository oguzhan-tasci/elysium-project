import { Component } from '@angular/core';

@Component({
  selector: 'reservation-component-all-reservations',
  templateUrl: './component-all-reservations.component.html',
  styleUrls: ['./component-all-reservations.component.css'],
})
export class ComponentAllReservationsComponent {
  activeIndex: number = 0;
  cols = [];
  allReservations = [];
  oncomingReservations = [];
  completedReservations = [];
  cancelledReservations = [];

  selectedProducts!: any;
  ngOnInit() {
    this.allReservations = [
      {
        id: 1,
        name: 'Tyler Durden',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png',
        price: 15999,
        status: 'Paid',
        countryName: 'Turkey',
        countryFlag: 'https://flagsapi.com/TR/flat/24.png',
        date: '5 October',
      },
      {
        id: 2,
        name: 'Dart Vader',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png',
        price: 19999,
        status: 'Paiding',
        countryName: 'Australia',
        countryFlag: 'https://flagsapi.com/AT/flat/24.png',
        date: '6 October',
      },
      {
        id: 3,
        name: 'Han Solo',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png',
        price: 24149,
        status: 'Paid',
        countryName: 'Belgium',
        countryFlag: 'https://flagsapi.com/BE/flat/24.png',
        date: '10 October',
      },
      {
        id: 4,
        name: 'Anthony Hopkins',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556495.png',
        price: 17999,
        status: 'Paiding',
        countryName: 'Brazil',
        countryFlag: 'https://flagsapi.com/BR/flat/24.png',
        date: '15 October',
      },
      {
        id: 5,
        name: 'Indiana Jones',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556520.png',
        price: 56999,
        countryName: 'Canada',
        countryFlag: 'https://flagsapi.com/CA/flat/24.png',
        status: 'Paid',
        date: '21 October',
      },
      {
        id: 6,
        name: 'Jack Sparrow',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556529.png',
        price: 10999,
        status: 'Paid',
        countryName: 'Switzerland',
        countryFlag: 'https://flagsapi.com/CH/flat/24.png',
        date: '28 October',
      },
      {
        id: 7,
        name: 'Ellen Ripley',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556465.png',
        price: 15999,
        status: 'Paiding',
        countryName: 'United Kingdom',
        countryFlag: 'https://flagsapi.com/GB/flat/24.png',
        date: '1 November',
      },
      {
        id: 8,
        name: 'Don Vito Corleone',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556458.png',
        price: 15999,
        status: 'Paid',
        countryName: 'Turkey',
        countryFlag: 'https://flagsapi.com/TR/flat/24.png',
        date: '9 November',
      },
      {
        id: 9,
        name: 'James Bond',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556505.png',
        price: 19999,
        status: 'Paiding',
        countryName: 'Hungary',
        countryFlag: 'https://flagsapi.com/HU/flat/24.png',
        date: '11 November',
      },
      {
        id: 10,
        name: 'John Mcclane',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png',
        price: 24149,
        status: 'Paid',
        countryName: 'Portugal',
        countryFlag: 'https://flagsapi.com/PT/flat/24.png',
        date: '5 January',
      },
      {
        id: 11,
        name: 'James Cameron',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556558.png',
        price: 7949,
        status: 'Cancel',
        countryName: 'Greece',
        countryFlag: 'https://flagsapi.com/GR/flat/24.png',
        date: '29 July',
      },
      {
        id: 12,
        name: 'Matthew Broderick',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556525.png',
        price: 29999,
        status: 'Cancel',
        countryName: 'Finland',
        countryFlag: 'https://flagsapi.com/FI/flat/24.png',
        date: '11 July',
      },
      {
        id: 13,
        name: 'Alan Rickman',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/4113/4113025.png',
        price: 26019,
        status: 'Cancel',
        countryName: 'Algeria',
        countryFlag: 'https://flagsapi.com/DZ/flat/24.png',
        date: '7 August',
      },
    ];

    this.reservationsOncoming();
    this.reservationsCompleted();
    this.reservationsCancelled();
  }
  getSeverity(status: string) {
    switch (status) {
      case 'Paid':
        return 'success';
      case 'Paiding':
        return 'warning';
      case 'Cancel':
        return 'danger';
    }
    return null;
  }

  reservationsOncoming() {
    const reservations = this.allReservations.filter((user) => {
      return user.status !== 'Cancel';
    });
    this.oncomingReservations = reservations;
  }

  reservationsCompleted() {
    const reservations = this.allReservations.filter((user) => {
      return user.status === 'Paid';
    });
    this.completedReservations = reservations;
  }
  reservationsCancelled() {
    const reservations = this.allReservations.filter((user) => {
      return user.status === 'Cancel';
    });
    this.cancelledReservations = reservations;
  }
}
