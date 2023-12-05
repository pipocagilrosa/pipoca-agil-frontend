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

  url = 'https://back-piporosa.onrender.com/user/signup'
  constructor( private http: HttpClient ) { }

  async post(register: Register) {
    await axios.post(this.url, JSON.stringify(register),
      {
        headers: {
          "Content-Type": "application/json"
        }
      } 
    ).then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    });
  }

  testPost(register: Register): Observable<Register> {
    return this.http.post<Register>(this.url, register, {headers: this.httpHeaders})
  }

}
