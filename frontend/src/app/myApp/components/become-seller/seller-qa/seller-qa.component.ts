import { Component } from '@angular/core';

@Component({
  selector: 'bc-seller-qa',
  templateUrl: './seller-qa.component.html',
  styleUrls: ['./seller-qa.component.css'],
})
export class SellerQaComponent {
  questions = [];

  ngOnInit() {
    this.questions = [
      {
        id: 1,
        question: 'Is my business eligible for Elysium?',
        answer:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eveniet dignissimos iste laudantium dolor excepturi?',
      },
      {
        id: 2,
        question: 'What are the Elysium fees?',
        answer:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eveniet dignissimos iste laudantium dolor excepturi?',
      },
      {
        id: 3,
        question: 'How much interaction should I interact with customers?',
        answer:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eveniet dignissimos iste laudantium dolor excepturi?',
      },
      {
        id: 4,
        question: 'Do you have any tips for being a great business?',
        answer:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eveniet dignissimos iste laudantium dolor excepturi?',
      },
      {
        id: 5,
        question: 'When will my sales be credited to my account?',
        answer:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eveniet dignissimos iste laudantium dolor excepturi?',
      },
      {
        id: 6,
        question: 'Is my business eligible for Elysium?',
        answer:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eveniet dignissimos iste laudantium dolor excepturi?',
      },
    ];
  }
}
