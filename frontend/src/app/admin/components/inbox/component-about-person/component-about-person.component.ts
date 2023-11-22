import { Component } from '@angular/core';

@Component({
  selector: 'inbox-component-about-person',
  templateUrl: './component-about-person.component.html',
  styleUrls: ['./component-about-person.component.css'],
})
export class ComponentAboutPersonComponent {
  avatarUrl =
    'https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png';
  name = 'Beckhy Lench';
  minutes = '16 minutes ago';
  visible: boolean = false;

  personDetails = [];

  ngOnInit() {
    this.personDetails = [
      {
        id: 1,
        title: 'Email',
        value: 'johndoe@gmail.com',
        iconClass : "font-semibold text-lg pi pi-inbox mr-3"
      },
      {
        id: 2,
        title: 'Phone',
        value: '+90 547 123 69 80',
        iconClass : "font-semibold text-lg pi pi-phone mr-3"

      },
      {
        id: 3,
        title: 'Location',
        value: 'Montreal,QC,Canada',
        iconClass : "font-semibold text-lg pi pi-globe mr-3"
      },
    ];
  }

  showDialog() {
    this.visible = true;
  }
}
