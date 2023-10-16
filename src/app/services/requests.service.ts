import { Injectable } from '@angular/core';
import axios from 'axios';
import { Register } from '../main/register';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor() { }

  async post(register: Register) {
    await axios.post('https://strapi-api-pipocarosa.onrender.com/api/auth/local/register', register 
    ).then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    });
  }

}
