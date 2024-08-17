import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Login from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }

  //ToDo: write Login endpoint to handle log in, leave this as is for them to fix with correct endpoint, Maybe
  login(login: Login): Observable<boolean> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<boolean>(`${this.apiUrl}/login-admin`,login);
  }
}
