import { Injectable } from '@angular/core';
import { sample_services } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  getAll() {
    return sample_services;
  }
}
