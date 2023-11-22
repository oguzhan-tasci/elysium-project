import { Component } from '@angular/core';
import { MainService } from 'src/app/myApp/services/main.service';

@Component({
  selector: 'pd-upper-left-side',
  templateUrl: './upper-left-side.component.html',
  styleUrls: ['./upper-left-side.component.css'],
})
export class UpperLeftSideComponent {
  images: any[] | undefined;
  thumbnailImages: any[] | undefined;

  constructor(private imageService: MainService) {}

  ngOnInit() {
    this.images = this.imageService.getAllImages();
  }
}
