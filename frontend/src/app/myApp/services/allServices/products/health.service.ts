import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ServiceBox } from 'src/app/myApp/models/ServiceBox';
import { ServiceDetails } from 'src/app/myApp/models/ServiceDetails';

@Injectable({
  providedIn: 'root',
})
export class HealthService {
  productsAPI = 'http://localhost:3000/api/products';
  constructor(private http: HttpClient) {}

  getAllServices(): Observable<any[]> {
    return this.http.get<ServiceBox[]>(this.productsAPI);
  }

  getUniqueService(id: number): Observable<any> {
    return this.http.get<ServiceDetails>(this.productsAPI + '/' + id);
  }
}
