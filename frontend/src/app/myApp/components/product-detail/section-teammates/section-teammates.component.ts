import { Component } from '@angular/core';

@Component({
  selector: 'pd-section-teammates',
  templateUrl: './section-teammates.component.html',
  styleUrls: ['./section-teammates.component.css'],
})
export class SectionTeammatesComponent {
  teammates = [];

  ngOnInit() {
    this.teammates = [
      {
        id: 1,
        name: 'Brian Chesky',
        title: 'General Practitioner',
        avatar: 'https://cdn-icons-png.flaticon.com/512/1253/1253756.png',
      },
      {
        id: 1,
        name: 'Amelia	Margaret',
        title: 'Specialist',
        avatar: 'https://cdn-icons-png.flaticon.com/512/4874/4874875.png',
      },
      {
        id: 1,
        name: 'Jan Koum',
        title: 'Operator Doctor',
        avatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556520.png',
      },
      {
        id: 1,
        name: 'Emily	Elizabeth',
        title: 'Assistant professor',
        avatar: 'https://cdn-icons-png.flaticon.com/512/7453/7453736.png',
      },
      {
        id: 1,
        name: 'Peter Thiel',
        title: 'Associate professor',
        avatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556512.png',
      },
      {
        id: 1,
        name: 'Isla	Bethany',
        title: 'Professor',
        avatar: 'https://cdn-icons-png.flaticon.com/512/2810/2810734.png',
      },
    ];
  }
}
