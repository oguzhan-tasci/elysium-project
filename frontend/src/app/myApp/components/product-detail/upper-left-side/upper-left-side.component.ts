import { Component, Input } from '@angular/core';
import { MainService } from 'src/app/myApp/services/main.service';

@Component({
  selector: 'pd-upper-left-side',
  templateUrl: './upper-left-side.component.html',
  styleUrls: ['./upper-left-side.component.css'],
})
export class UpperLeftSideComponent {
  @Input() title:string;
  @Input() country : string;
  @Input() city : string;
  @Input() stars : number;
  @Input() images : string[];

  constructor(private imageService: MainService) {}

  ngOnInit() {
  }
}
