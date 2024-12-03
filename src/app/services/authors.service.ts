import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private apiUrl = 'http://localhost:4200/authors'; // URL to the backend API

  constructor(private http: HttpClient) { }

  // Fetch all authorss
  getAuthors(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Fetch a single author by ID
  getAuthorById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Add a new author
  createAuthor(author: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, author);
  }

  // Update an author by ID
  updateAuthor(id: string, author: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, author);
  }

  // Delete an author by ID
  deleteAuthor(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
