import { Injectable } from '@angular/core';
import { sample_images } from 'src/data-images';

@Injectable({
  providedIn: 'root',
})
export class CityInfoService {
  constructor() {}

  getAllImages() {
    return sample_images;
  }
}
