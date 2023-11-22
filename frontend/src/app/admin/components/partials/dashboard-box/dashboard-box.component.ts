import { Component, Input } from '@angular/core';

@Component({
  selector: 'partial-dashboard-box',
  templateUrl: './dashboard-box.component.html',
  styleUrls: ['./dashboard-box.component.css'],
})
export class DashboardBoxComponent {
  @Input() title: string;
  @Input() iconClass: string;
  @Input() outcome: string;
  @Input() percentage: string;
}
