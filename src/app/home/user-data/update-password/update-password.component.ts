import { DialogService } from './../../../services/dialog.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from 'src/app/register';
import { RequestsService } from 'src/app/services/requests.service';
import { ShareService } from 'src/app/services/share.service';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  hide = true
  hideNew = true
  hideConfirm = true
  register: Register
  accountDetails!: FormGroup
  loadedData = false
  resetScreen = false

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

  validationMessages = this.validatorService.validationMessages

  ngOnInit(): void {
    let path = this.router.url
    if(path === '/reset-password') {
      this.resetScreen = true
    }
    this.createForm()
  }

  createForm() {
    this.accountDetails = this.fb.group({
      password: new FormControl(''),
      newPassword: new FormControl(''),
      confirmPassword: new FormControl('')
    })
  }

  deleteAccount() {
    this.dialogService.openChangesDialog()
  }

  navigate() {
    this.router.navigate(['user-data/update'])
  }

  inputTouched() {
    this.setValidation()
  }

  setValidation() {
    if (!this.accountDetails.get('password')?.hasValidator(Validators.required)) {
      if(!this.resetScreen) {
        this.accountDetails.get('password')?.addValidators(
          [Validators.required]
        )
      }
      this.accountDetails.get('newPassword')?.addValidators(
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      )
    }
  }

  updateValidity() {
    if(!this.resetScreen) {
      this.accountDetails.get('password')?.updateValueAndValidity()
      this.accountDetails.get('password')?.markAsDirty()
    }
    this.accountDetails.get('newPassword')?.updateValueAndValidity()
    this.accountDetails.get('newPassword')?.markAsDirty()
    this.accountDetails.get('confirmPassword')?.updateValueAndValidity()
    this.accountDetails.get('confirmPassword')?.markAsDirty()
  }

  save() {
    this.setValidation()
    this.updateValidity()
    if (this.accountDetails.valid) {
      console.log("Save button activated")
    }
  }
}
