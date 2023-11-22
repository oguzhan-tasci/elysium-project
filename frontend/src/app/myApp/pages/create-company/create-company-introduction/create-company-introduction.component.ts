import { Component } from '@angular/core';

@Component({
  selector: 'app-create-company-introduction',
  templateUrl: './create-company-introduction.component.html',
  styleUrls: ['./create-company-introduction.component.css'],
})
export class CreateCompanyIntroductionComponent {
  articles = [];

  ngOnInit() {
    this.articles = [
      {
        id: 1,
        title: 'You can show the world your amazing work!',
        subtitle:
          'Everyone in the world will see the great work you do! You can interact with the whole world and improve your customer portfolio.',
        image: '../../../../../assets/create-company/joyride.svg',
      },
      {
        id: 2,
        title: 'Take advantage of the competition',
        subtitle:
          'You can determine your own strategy and become a world brand by doing your job in the best way possible.',
        image: '../../../../../assets/create-company/super-woman.svg',
      },
      {
        id: 3,
        title: 'Make more money by doing your own business',
        subtitle:
          'By continuing to do your daily job, you can open up to the whole world and increase your earnings!',
        image: '../../../../../assets/create-company/treasure.svg',
      },
    ];
  }
}
