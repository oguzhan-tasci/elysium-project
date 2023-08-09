import { Injectable } from '@angular/core';
import { sample_services } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor() {}

  getAll(value: number) {
    return sample_services.splice(0, value);
  }
}
