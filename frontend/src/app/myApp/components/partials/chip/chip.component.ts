import { Component, Input } from '@angular/core';

@Component({
  selector: 'partial-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css'],
})
export class ChipComponent {
  @Input() seperator: string;
  @Input() value: string;
  @Input() placeholder: string;
}
