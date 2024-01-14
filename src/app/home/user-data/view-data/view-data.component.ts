import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Register } from 'src/app/register';
import { RequestsService } from 'src/app/services/requests.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit, OnDestroy {

  register: Register
  private subscription: Subscription | undefined;

  constructor(
    private requests: RequestsService,
    private shareService: ShareService
  ) {
    this.register = new Register()
  }

  ngOnInit(): void {
    let auth!: string
    let sub!: string
    this.shareService.accessRequired$.subscribe((values) => {
      auth = values![0]
      sub = values![1]
    })
    let response = this.requests.get<Register>(auth, sub).subscribe({
      next: (data) => {
        this.register = {
          name: data.name,
          email: data.email,
          birthDate: data.birthDate,
          password: "******"
        }
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
