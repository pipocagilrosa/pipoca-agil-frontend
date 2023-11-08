import { Injectable } from '@angular/core';
import axios from 'axios';
import { Register } from '../main/register';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  url = 'https://back-piporosa.onrender.com/user/signup'
  constructor( private http: HttpClient ) { }

  async post(register: Register) {
    await axios.post(this.url, register 
    ).then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    });
  }

  testPost(register: Register): Observable<Register> {
    return this.http.post<Register>(this.url, register)
  }

}
