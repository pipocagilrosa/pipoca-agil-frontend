import { DialogService } from './../../../services/dialog.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Register } from 'src/app/register';
import { RequestsService } from 'src/app/services/requests.service';
import { ShareService } from 'src/app/services/share.service';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnDestroy {

  register: Register
  private subscription: Subscription | undefined;
  accountDetails!: FormGroup
  loadedData = false
  auth!: string
  sub!: string

  constructor(
    private requests: RequestsService,
    private shareService: ShareService,
    private validatorService: ValidatorService,
    private dialogService: DialogService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.register = new Register()
  }

  ngOnInit(): void {
    this.createForm()
    this.auth = sessionStorage.getItem("auth")!
    this.sub = sessionStorage.getItem("sub")!
    this.requests.get<Register>(this.auth, this.sub).subscribe({
      next: (data) => {
        this.accountDetails.setValue({
          name: data.name,
          birthDate: data.birthDate
        })
        this.register.email = data.email
        this.loadedData = true
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

  createForm() {
    this.accountDetails = this.fb.group({
      name: new FormControl(' ', [
        Validators.required,
        this.validatorService.spaceValidator(),
        this.validatorService.characterValidator()
      ]),
      birthDate: new FormControl(' ', [
        Validators.required,
        this.validatorService.formatValidator(),
        this.validatorService.ageValidator(18)
      ])
    })
  }

  validationMessages = this.validatorService.validationMessages

  deleteAccount() {
    this.dialogService.openChangesDialog()
  }

  navigate() {
    this.router.navigate(['user-data/update-password'])
  }

  save() {
    this.register.name = this.accountDetails.value.name
    this.register.birthDate = this.accountDetails.value.birthDate

    if(this.accountDetails.valid) {
      this.requests.put(this.sub, this.register, this.auth, 'profile-update').subscribe(
        {
          next: (data) => {
            this.dialogService.openConfirmDialog('Cadastro alterado com sucesso', 'user-data/update')
          }
        }
      )
    }
  }
}
