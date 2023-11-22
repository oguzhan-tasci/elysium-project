import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'partial-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  @Input() selectedCities: string[];
  @Input() value: string;
  @Input() inputIdFor: string;
  @Input() name: string;
}
