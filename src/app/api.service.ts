import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:4200/authors';  // URL to your API

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add similar methods for titles if needed
  getTitles(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:4200/title');
  }
}
