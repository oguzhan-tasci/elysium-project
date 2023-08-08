import { Component } from '@angular/core';

@Component({
  selector: 'hp-famous-cities',
  templateUrl: './famous-cities.component.html',
  styleUrls: ['./famous-cities.component.css'],
})
export class FamousCitiesComponent {
  famousCities: any[] = [
    {
      id: 1,
      name: 'Istanbul',
      quantity: 1453,
      information:
        "You can find many different businesses for you in Turkey's most industrialized city.",
      image:
        'https://images.unsplash.com/photo-1531846802986-4942a5c3dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 2,
      name: 'Bursa',
      quantity: 542,
      information:
        'You can choose one of the best provinces  in Turkey, you can perform your transaction here.',
      image:
        'https://images.unsplash.com/photo-1618503551238-7df2c50d2236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=423&q=80',
    },
    {
      id: 3,
      name: 'Ankara',
      quantity: 341,
      information:
        'How about the capital of Turkey? You can reach many awesome business.',
      image:
        'https://images.unsplash.com/photo-1583565929583-c5aa76ab16f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },

    {
      id: 4,
      name: 'Izmir',
      quantity: 219,
      information:
        'Izmir which is one of the most beautiful provinces of Turkey, you can both get treatment and visit. ',
      image:
        'https://images.unsplash.com/photo-1533242807153-a5f04138eac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNpdGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];
}
