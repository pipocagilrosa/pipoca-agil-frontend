import { Component } from '@angular/core';

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.css']
})
export class HeaderThreeComponent {
  
  constructor() { }

  goBack() {
    window.history.back(); 
  }
}
