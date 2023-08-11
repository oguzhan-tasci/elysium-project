import { Component } from '@angular/core';

@Component({
  selector: 'hp-real-stories',
  templateUrl: './real-stories.component.html',
  styleUrls: ['./real-stories.component.css'],
})
export class RealStoriesComponent {
  realStories: any[] = [
    {
      id: 1,
      name: 'Larry Page',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      story:
        'It was great to do everything from one platform. This saved me time and money! Thanks.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, vitae?',
    },
    {
      id: 2,
      name: 'Steve Jobs',
      image:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      story:
        'The platform carefully watched the whole process and made me feel safe. Thanks for everything guys! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, vitae?',
    },
    {
      id: 3,
      name: 'Elon Musk',
      image:
        'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      story:
        'The clinic was very clean and nice, the hotel right next to it was also very good, I also visited Istanbul :) Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, vitae?',
    },
    {
      id: 4,
      name: 'Sem Altman',
      image:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      story:
        'Our family just returned from a 10 day a Istanbul. I must say, I was pretty impressed. I had tried contacting other perspectiI have already been spreading the good word. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, vitae?',
    },
  ];
}
