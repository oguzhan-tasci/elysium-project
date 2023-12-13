import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBox } from 'src/app/myApp/models/ServiceBox';

@Injectable({
  providedIn: 'root',
})
export class FeaturedService {
  private apiUrl = 'http://localhost:3000/api/homepage';
  constructor(private http: HttpClient) {}

  getFeaturedServices(): Observable<any[]> {
    return this.http.get<ServiceBox[]>(this.apiUrl);
  }
}
