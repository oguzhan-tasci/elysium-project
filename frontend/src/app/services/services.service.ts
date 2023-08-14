import { Injectable } from '@angular/core';
import { sample_services } from 'src/data';
import { sample_images } from 'src/data-images';
import { sample_otels } from 'src/data-otel';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor() {}

  getAll(value: number) {
    return sample_services.splice(0, value);
  }
  getAllOtels(value: number) {
    return sample_otels.splice(0, value);
  }
  getAllImages() {
    return sample_images;
  }
}
