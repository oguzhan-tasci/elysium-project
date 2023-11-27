import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000/api/companies';
  constructor(private http: HttpClient) {}

  getCompanyDetails(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
