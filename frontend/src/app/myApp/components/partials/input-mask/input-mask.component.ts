import { Component, Input } from '@angular/core';

@Component({
  selector: 'partial-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.css'],
})
export class InputMaskComponent {
  @Input() controlName: string;
  @Input() inputPlaceholder: string;
  @Input() inputMask: string;
  @Input() inputTitle: string;
}
