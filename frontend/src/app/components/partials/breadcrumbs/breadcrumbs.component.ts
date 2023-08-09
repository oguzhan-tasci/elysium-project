import { Component, Input } from '@angular/core';

@Component({
  selector: 'partial-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent {
  @Input() items: any[];
  @Input() home: any;
}
