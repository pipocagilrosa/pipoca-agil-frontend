import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Register } from 'src/app/register';
import { DialogService } from 'src/app/services/dialog.service';
import { RequestsService } from 'src/app/services/requests.service';
import { ShareService } from 'src/app/services/share.service';
import { ValidatorService } from 'src/app/services/validator.service';

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
    private shareService: ShareService,
    private validatorService: ValidatorService,
    private dialogService: DialogService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.register = new Register()
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ register }) => {
      this.register = {
        name: register.name,
        email: register.email,
        birthDate: register.birthDate,
        password: "******"
      }
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  updateAccount() {
    this.router.navigate(['user-data/update'])
  }

  deleteAccount() {
    this.dialogService.openChangesDialog()
  }
}
