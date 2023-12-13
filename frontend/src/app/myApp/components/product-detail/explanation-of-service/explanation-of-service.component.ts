import { Component, Input } from '@angular/core';

@Component({
  selector: 'pd-explanation-of-service',
  templateUrl: './explanation-of-service.component.html',
  styleUrls: ['./explanation-of-service.component.css'],
})
export class ExplanationOfServiceComponent {
  @Input() explanation: string;
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
