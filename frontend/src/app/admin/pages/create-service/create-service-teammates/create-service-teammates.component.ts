import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'create-service-teammates',
  templateUrl: './create-service-teammates.component.html',
  styleUrls: ['./create-service-teammates.component.css'],
})
export class CreateServiceTeammatesComponent {
  inputFields = [];

  teammates = [];

  ngOnInit() {
    this.inputFields = [
      {
        id: 1,
        htmlFor: 'name-surname',
        label: 'Name - Surname',
        inputId: 'name-surname',
        inputPlaceholder: 'Ex: John Doe',
        smallId: 'name-surname-help',
        describe: 'name-surname-help',
        smallValue:
          "You are able to define your member of teammates' name with this.",
      },
      {
        id: 2,
        htmlFor: 'title',
        label: "Member's Title",
        inputId: 'title',
        inputPlaceholder: 'Ex: Assistant professor',
        smallId: 'title-help',
        describe: 'title-help',
        smallValue:
          "You are able to explain your member of team's position,field etc.",
      },
    ];
    this.teammates = [
      {
        id: 1,
        name: 'Brian Chesky',
        title: 'General Practitioner',
        avatar: 'https://cdn-icons-png.flaticon.com/512/1253/1253756.png',
      },
      {
        id: 2,
        name: 'Amelia	Margaret',
        title: 'Specialist',
        avatar: 'https://cdn-icons-png.flaticon.com/512/4874/4874875.png',
      },
      {
        id: 3,
        name: 'Jan Koum',
        title: 'Operator Doctor',
        avatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556520.png',
      },
      {
        id: 4,
        name: 'Emily	Elizabeth',
        title: 'Assistant professor',
        avatar: 'https://cdn-icons-png.flaticon.com/512/7453/7453736.png',
      },
      {
        id: 5,
        name: 'Peter Thiel',
        title: 'Associate professor',
        avatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556512.png',
      },
      {
        id: 6,
        name: 'Isla	Bethany',
        title: 'Professor',
        avatar: 'https://cdn-icons-png.flaticon.com/512/2810/2810734.png',
      },
    ];
  }
}
