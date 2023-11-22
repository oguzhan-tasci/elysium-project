import { Component, Input } from '@angular/core';

@Component({
  selector: 'partial-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent {
  visible: boolean = false;
  @Input() personName: string;
  @Input() personAvatar: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() time: string;
  @Input() serviceImage: string;


}
