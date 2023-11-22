import { Component, Input } from '@angular/core';

@Component({
  selector: 'partial-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  @Input() message: any;
}
