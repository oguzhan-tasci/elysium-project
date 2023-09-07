import { Injectable } from '@angular/core';
import { sample_images } from 'src/data-images';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor() {}
  getAllImages() {
    return sample_images;
  }
}
