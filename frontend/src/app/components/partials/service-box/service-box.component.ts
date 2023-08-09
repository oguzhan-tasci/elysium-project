import { Component, Input } from '@angular/core';

@Component({
  selector: 'partial-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.css'],
})
export class ServiceBoxComponent {
  @Input() sectionTitle: string;
  @Input() image: string;
  @Input() location: string;
  @Input() stars: string;
  @Input() title: string;
  @Input() explanation: string;
  @Input() price?: string;
}
