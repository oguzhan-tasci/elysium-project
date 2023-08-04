import { Component } from '@angular/core';

@Component({
  selector: 'hp-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  randomNumber : number = Math.floor(Math.random() * 100);
}
