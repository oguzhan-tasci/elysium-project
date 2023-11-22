import { Injectable } from '@angular/core';
import { sample_otels } from 'src/data-otel';

@Injectable({
  providedIn: 'root'
})
export class OtelInfoService {

  constructor() { }

  getAllOtels(value: number) {
    return sample_otels.splice(0, value);
  }
}
