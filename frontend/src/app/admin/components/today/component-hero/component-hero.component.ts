import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-component-hero',
  templateUrl: './component-hero.component.html',
  styleUrls: ['./component-hero.component.css'],
})
export class ComponentHeroComponent {
  options: any;
  dashboard: any;

  ngOnInit() {
    this.options = [
      { name: 'Today', code: 'Today' },
      { name: 'This Week', code: 'Week' },
      { name: 'This Month', code: 'Month' },
      { name: 'Half Year', code: 'Half' },
      { name: 'This Year', code: 'Year' },
    ];
    this.dashboard = [
      {
        id: 1,
        title: 'Total Revenue',
        iconClass: 'pi text-xl pi-money-bill',
        outcome: '$ 1,600.00',
        percentage: '+6,32',
      },
      {
        id: 2,
        title: 'Total Visitor',
        iconClass: 'pi text-xl pi-user',
        outcome: '241',
        percentage: '+21,44',
      },
      {
        id: 3,
        title: 'Total Order',
        iconClass: 'pi text-xl pi-shopping-cart',
        outcome: '23',
        percentage: '+56,89',
      },
      {
        id: 4,
        title: 'Refunded',
        iconClass: 'pi text-xl pi-ban',
        outcome: '4',
        percentage: '-2,21',
      },
    ];
  }
}
