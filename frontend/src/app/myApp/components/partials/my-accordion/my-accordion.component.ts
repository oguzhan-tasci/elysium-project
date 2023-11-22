import { Component, Input } from '@angular/core';

@Component({
  selector: 'p-my-accordion',
  templateUrl: './my-accordion.component.html',
  styleUrls: ['./my-accordion.component.css'],
})
export class MyAccordionComponent {
  @Input() header: string;
  @Input() content: string;
}
