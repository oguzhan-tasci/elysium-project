import { Component } from '@angular/core';

@Component({
  selector: 'hp-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  randomNumber : number = Math.floor(Math.random() * 100);
  title : string = "Go Everywhere";
  title2 : string = "Live for yourself and your health.";
  subtitle : string = "How would you like to spend your time?";
}
