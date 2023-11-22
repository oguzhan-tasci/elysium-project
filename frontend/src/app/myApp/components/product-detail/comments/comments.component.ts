import { Component } from '@angular/core';

@Component({
  selector: 'pd-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  value: number = 4;
  comments: any[] = [
    {
      id: 1,
      name: 'Oguzhan Tasci',
      image: 'https://cdn-icons-png.flaticon.com/512/5556/5556520.png',
      flag: 'https://flagsapi.com/TR/flat/24.png',
      country: 'Turkey',
      stars: '4',
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      id: 2,
      name: 'Gökhan Kocaman',
      image: 'https://cdn-icons-png.flaticon.com/512/5556/5556529.png',
      flag: 'https://flagsapi.com/US/flat/24.png',
      country: 'United States',
      stars: '5',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      name: 'Aberald Geralde',
      image: 'https://cdn-icons-png.flaticon.com/512/3884/3884857.png',
      flag: 'https://flagsapi.com/DE/flat/24.png',
      country: 'Germany',
      stars: '3',
      comment:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
    },
  ];
}
