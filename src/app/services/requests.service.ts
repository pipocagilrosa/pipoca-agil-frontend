import { Injectable } from '@angular/core';
import axios from 'axios';
import { Register } from '../main/register';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor() { }

  post(register: Register) {
    axios.post('https://strapi-api-pipocarosa.onrender.com/api/auth/local/register', register 
    ).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
