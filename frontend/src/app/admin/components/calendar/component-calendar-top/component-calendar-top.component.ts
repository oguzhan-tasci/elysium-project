import { Component } from '@angular/core';

@Component({
  selector: 'calendar-component-calendar-top',
  templateUrl: './component-calendar-top.component.html',
  styleUrls: ['./component-calendar-top.component.css'],
})
export class ComponentCalendarTopComponent {
  buttons = [];
  firstSide = [];
  secondSide = [];
  ngOnInit() {
    this.buttons = [
      {
        id: 1,
        iconClass: 'pi pi-plus',
        label: '',
        styleClass: 'mx-1 p-button-rounded  p-button-outlined',
      },
      {
        id: 2,
        iconClass: 'pi pi-minus',
        label: '',
        styleClass: 'mx-1 p-button-rounded  p-button-outlined',
      },
      {
        id: 3,
        iconClass: 'pi pi-angle-double-left',
        label: '',
        styleClass: 'mx-1 p-button-rounded  p-button-outlined',
      },
      {
        id: 4,
        iconClass: 'pi pi-angle-left',
        label: '',
        styleClass: 'mx-1 p-button-rounded  p-button-outlined',
      },
      {
        id: 5,
        iconClass: '',
        label: '02.10.2023 - 08.10.2023',
        styleClass: 'mx-1 p-button-rounded',
      },
      {
        id: 6,
        iconClass: 'pi pi-angle-right',
        styleClass: 'mx-1 p-button-rounded p-button-outlined',
      },
      {
        id: 7,
        iconClass: 'pi pi-angle-double-right',
        styleClass: 'mx-1 p-button-rounded  p-button-outlined',
      },
    ];
    this.firstSideButtons();
    this.secondSideButtons();
  }

  firstSideButtons() {
    const firstSide = this.buttons.slice(0, 4);
    this.firstSide = firstSide;
  }
  secondSideButtons() {
    const secondSide = this.buttons.splice(5, 7);
    this.secondSide = secondSide;
  }
}
