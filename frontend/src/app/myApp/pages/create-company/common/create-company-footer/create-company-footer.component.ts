import { Component, Input } from '@angular/core';

@Component({
  selector: 'create-company-footer',
  templateUrl: './create-company-footer.component.html',
  styleUrls: ['./create-company-footer.component.css'],
})
export class CreateCompanyFooterComponent {
  @Input() previousRoute: string;
  @Input() forwardRoute: string;
  @Input() barValue: number;
}
