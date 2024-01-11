import { ShareService } from './../../services/share.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.css']
})
export class HeaderComponent {

  constructor(private shareService: ShareService) {

  }
  scrollToRegister() {
    this.shareService.requestScroll('registerComponent')
  }
}
