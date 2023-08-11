import { Component } from '@angular/core';

@Component({
  selector: 'pd-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  clocks: any[] = [
    { id: 1, time: '06:00', available: true },
    { id: 2, time: '07:00', available: true },
    { id: 3, time: '08:00', available: true },
    { id: 4, time: '09:00', available: false },
    { id: 5, time: '10:00', available: false },
    { id: 6, time: '11:00', available: false },
    { id: 7, time: '12:00', available: true },
    { id: 8, time: '13:00', available: true },
    { id: 9, time: '14:00', available: false },
    { id: 10, time: '15:00', available: true },
    { id: 11, time: '16:00', available: false },
    { id: 12, time: '17:00', available: true },
    { id: 13, time: '18:00', available: true },
    { id: 14, time: '19:00', available: false },
    { id: 15, time: '20:00', available: false },
    { id: 16, time: '21:00', available: true },
    { id: 17, time: '22:00', available: false },
    { id: 18, time: '23:00', available: true },
    { id: 19, time: '00:00', available: false },
    { id: 20, time: '01:00', available: true },
    { id: 21, time: '02:00', available: true },
    { id: 22, time: '03:00', available: true },
  ];
  currentDate = new Date();
  date: Date[] | undefined;
  minDate: any;
  maxDate: any;

  ngOnInit() {
    console.log(new Date());
    console.log(new Date().getFullYear());
    console.log(new Date().getDay());
    console.log(new Date().getMonth());
  }
}
