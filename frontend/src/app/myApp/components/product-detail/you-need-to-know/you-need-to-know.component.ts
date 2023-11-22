import { Component } from '@angular/core';

@Component({
  selector: 'pd-you-need-to-know',
  templateUrl: './you-need-to-know.component.html',
  styleUrls: ['./you-need-to-know.component.css'],
})
export class YouNeedToKnowComponent {
  rulesColumn1: any[] = [
    {
      id: 1,
      rule: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
    },
    {
      id: 2,
      rule: 'The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled.',
    },
    {
      id: 3,
      rule: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  rulesColumn2: any[] = [
    {
      id: 5,
      rule: 'The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. ',
    },
    {
      id: 6,
      rule: " Today it's seen all around the web; on templates, websites, and stock designs",
    },
    {
      id: 7,
      rule: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
    },
  ];
}
