import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private pathUrl: string;

  constructor(private http: HttpClient) { 
    this.pathUrl = 'http://localhost:8090/api/v1/api';
  }

  public findAll(): Observable<string> {
    return this.http.get<string>(this.pathUrl) ;
  }
}
