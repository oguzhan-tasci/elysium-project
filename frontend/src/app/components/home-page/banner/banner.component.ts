import { Component } from '@angular/core';

@Component({
  selector: 'hp-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  randomNumber: number = Math.floor(Math.random() * 100);
  value: string | undefined;
  value2: string | undefined;
  inputValues: any[] = [];
  ngOnInit() {
    this.inputValues = [
      {
        id: 1,
        title: 'Location',
        iconClass: 'pi pi-flag mr-1 text-sm text-300',
        inputPlaceholder: 'Where Do you want to go?',
        myValue: this.value,
      },
      {
        id: 2,
        title: 'Service',
        iconClass: 'pi pi-user mr-1 text-sm text-300',
        inputPlaceholder: 'What are you looking for?',
        myValue: this.value2,
      },
    ];
  }
}
