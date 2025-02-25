import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
export class HeaderTwoComponent {

  constructor(private location: Location) { }

  goBack() {
    window.history.back(); 
  }
}
