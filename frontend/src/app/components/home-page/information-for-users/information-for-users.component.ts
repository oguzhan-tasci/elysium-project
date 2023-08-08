import { Component } from '@angular/core';

@Component({
  selector: 'hp-information-for-users',
  templateUrl: './information-for-users.component.html',
  styleUrls: ['./information-for-users.component.css'],
})
export class InformationForUsersComponent {
  informations: any[] = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'You will never be alone with us',
      subtitle:
        'Friendly customer service coast to coast available every day of the year. We answer all of you questions quickly with our comprehensive web site and response customer service.',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1625837749679-e4f8b5812c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80',
      title: 'We save your time and spare you the headaches',
      subtitle:
        'Other sites have you wasting time dealing with multiple property owners all at once. You wait for replies from busy business owners that do not reply in a timely manner with the information you really need to make a decision',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      title: 'Your money and your time in our responsibility',
      subtitle:
        'Friendly customer service coast to coast available every day of the year. We answer all of you questions quickly with our comprehensive web site and response customer service.',
    },
  ];
}
