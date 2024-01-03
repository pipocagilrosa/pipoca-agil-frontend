import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/register';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {
  
  register!: Register
  
  ngOnInit(): void {
    this.register = {
      name: "Guilherme",
      email: "guilherme@gmail.com",
      password: "*******",
      birthDate: "13/08/2001"
    }
  }
}
