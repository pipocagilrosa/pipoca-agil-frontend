import { Component } from '@angular/core';
import { Register } from './register';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  constructor(public register: Register, private requests: RequestsService){

  }
 
  teste() {
    this.requests.post(this.register);
  }

  checked = false
}
