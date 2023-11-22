import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ServiceBox } from 'src/app/myApp/models/ServiceBox';
import { sample_services } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class HealthService {
  private apiUrl = 'http://localhost:3000/api/services';
  constructor(private http: HttpClient) {}

  getAllServices(): Observable<any[]> {
    return this.http.get<ServiceBox[]>(this.apiUrl);
  }

  getUniqueService(id: number): Observable<any> {
    return this.http.get<ServiceBox[]>(this.apiUrl + '/' + id);
  }
}
