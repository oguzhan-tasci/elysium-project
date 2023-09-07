import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'pd-upper-left-side',
  templateUrl: './upper-left-side.component.html',
  styleUrls: ['./upper-left-side.component.css'],
})
export class UpperLeftSideComponent {
  images: any[] | undefined;
  thumbnailImages: any[] | undefined;

  constructor(private imageService: ServicesService) {}

  ngOnInit() {
    this.images = this.imageService.getAllImages();
  }
}
