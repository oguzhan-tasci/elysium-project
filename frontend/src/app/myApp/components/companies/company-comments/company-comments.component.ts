import { Component } from '@angular/core';

@Component({
  selector: 'c-company-comments',
  templateUrl: './company-comments.component.html',
  styleUrls: ['./company-comments.component.css'],
})
export class CompanyCommentsComponent {
  comments = [];

  ngOnInit() {
    this.comments = [
      {
        id: 1,
        name: 'Oguzhan Tasci',
        image:
          'https://media.istockphoto.com/id/1300512215/tr/foto%C4%9Fraf/ofiste-g%C3%BCl%C3%BCmseyen-etnik-i%C5%9Fadam%C4%B1n%C4%B1n-headshot-portresi.jpg?s=612x612&w=0&k=20&c=F0J7EpCGsNguQjf472Mu-70_bzyMAYCc8WJMo7P3RIQ=',
        flag: 'https://flagsapi.com/TR/flat/24.png',
        country: 'Turkey',
        stars: '4',
        comment:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      },
      {
        id: 2,
        name: 'Gökhan Kocaman',
        image:
          'https://image.shutterstock.com/mosaic_250/2780032/1667439913/stock-photo-headshot-portrait-of-smiling-millennial-male-employee-talk-on-video-call-or-web-conference-in-1667439913.jpg',
        flag: 'https://flagsapi.com/US/flat/24.png',
        country: 'United States',
        stars: '5',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        name: 'Aberald Geralde',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        flag: 'https://flagsapi.com/DE/flat/24.png',
        country: 'Germany',
        stars: '3',
        comment:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
      },
    ];
  }
}
