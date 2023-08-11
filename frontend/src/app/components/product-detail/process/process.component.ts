import { Component } from '@angular/core';

@Component({
  selector: 'pd-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
})
export class ProcessComponent {
  allSteps: any[] = [
    {
      id: 1,
      name: 'Step 1',
      iconClass:
        'bg-blue-200 p-2 text-blue-800 text-sm border-round-2xl pi pi-thumbs-up',
      step: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      id: 2,
      name: 'Step 2',
      iconClass:
        'bg-blue-200 p-2 text-blue-800 text-sm border-round-2xl pi pi-envelope',
      step: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      id: 3,
      name: 'Step 3',
      iconClass:
        'bg-blue-200 p-2 text-blue-800 text-sm border-round-2xl pi pi-dollar',
      step: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
  ];
}
