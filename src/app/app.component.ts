import { Component, OnInit } from '@angular/core';
import { ShareService } from './services/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showLoadingIcon!: Boolean

  constructor(private shareService: ShareService) {}

  ngOnInit(): void {
    this.shareService.loadingRequested$.subscribe((value) => {
      this.showLoadingIcon = value
    })
  }
  
  title = 'pipoca-agil';

}
