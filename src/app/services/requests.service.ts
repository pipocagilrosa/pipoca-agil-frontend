import { Injectable } from '@angular/core';
import axios from 'axios';
import { Register } from '../register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  url = 'https://back-piporosa.onrender.com/'
  constructor( private http: HttpClient ) {}

  setAuthorization(auth?: string) {
    let headers = this.httpHeaders
    if(auth) {
      headers = headers.append('Authorization', `Bearer ${auth}`)
    }
    return headers
  }

  post<T>(param: T, path: string, authorized: boolean, auth?: string): Observable<T> {
    return this.http.post<T>(`${this.url}${path}`, param, {
      headers: authorized ? this.setAuthorization(auth) : this.httpHeaders
    })
  }
 
  get<T>(authorized: boolean, path: string, auth?: string): Observable<T> {
    return this.http.get<T>(`${this.url}${path}`, {
      headers: authorized ? this.setAuthorization(auth) : this.httpHeaders
    })
  }

  delete<T>(id: string, auth: string, path: string): Observable<T> {
    return this.http.delete<T>(`${this.url}user/${id}/${path}`, {headers: this.setAuthorization(auth)})
  }

  put<T>(id: string, param: T, auth: string, path: string): Observable<T> {
    return this.http.put<T>(`${this.url}user/${id}/${path}`, param, {headers: this.setAuthorization(auth)})
  }

}
