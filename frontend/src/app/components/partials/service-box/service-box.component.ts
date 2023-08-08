import { Component, Input } from '@angular/core';

@Component({
  selector: 'partial-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.css'],
})
export class ServiceBoxComponent {
  @Input() imageUrl: string = '';
  @Input() location: string = '';
  @Input() stars: string = '';
  @Input() title: string = 'We are one of best doctors in whhole ';
  @Input() price: string = '';
}
