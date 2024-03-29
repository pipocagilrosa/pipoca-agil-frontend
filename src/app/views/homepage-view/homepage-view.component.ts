import { Component } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-homepage-view',
  templateUrl: './homepage-view.component.html',
  styleUrls: ['./homepage-view.component.css']
})
export class HomepageViewComponent {

  constructor(
    private shareService: ShareService
  ) { }

  ngOnInit(): void {
    this.shareService.scrollRequested$.subscribe((target) => {
      this.scrollToRegister(target)
    })

  }
  scrollToRegister(target: any) {
    const divContainer = document.getElementById('registerComponent')
    if (divContainer) {
      if(target == 'samePage') {
        divContainer.scrollIntoView({behavior: "smooth", block: "start"})
      } else {
        divContainer.scrollIntoView(true)
      }
    }
  }
}
