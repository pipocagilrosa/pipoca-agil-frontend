import { Component, OnInit } from '@angular/core';
import { Register } from '../../../register';
import { RequestsService } from '../../../services/requests.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ValidatorService } from '../../../services/validator.service';
import { throwIfEmpty } from 'rxjs';
import { ShareService } from 'src/app/services/share.service';
import { DialogService } from 'src/app/services/dialog.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  accountDetails!: FormGroup
  hide = true
  hideConfirm = true

  register!: Register

  constructor(
    private requestService: RequestsService, 
    private validatorService: ValidatorService, 
    private dialogService: DialogService,
    private fb: FormBuilder, 
  ) {

  }

  validationMessages = this.validatorService.validationMessages

  ngOnInit(): void {
    this.createForm()
    this.accountDetails.controls['password'].valueChanges.subscribe((newValue) => {
      this.validatorService.passwordUpdate = newValue
    })
  }

  createForm() {
    this.accountDetails = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        this.validatorService.spaceValidator(),
        this.validatorService.characterValidator()
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        // this.validarNumero()
      ]),
      birthDate: new FormControl('', [
        Validators.required,
        this.validatorService.formatValidator(),
        this.validatorService.ageValidator(18)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        this.validatorService.equalValidator()
      ])
    })
  }

  // validarNumero() {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const valor = control.value;
  //     const numerosApenas = valor.replace(/[^0-9]/, '');

  //     control.setValue(numerosApenas, { emitEvent: false });

  //     return null;
  //   }

  // }

  blockLetters(event: KeyboardEvent) {
    const regex = /[0-9\/]/; 
    
    if (event.key === 'Backspace' || event.key === 'Tab') {
      return;
    }

    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  }

  send() {
    let ret
    this.register = {
      name: this.accountDetails.value.name,
      email: this.accountDetails.value.email,
      password: this.accountDetails.value.password,
      birthDate: this.accountDetails.value.birthDate
    }

    if (this.accountDetails.valid) {
      this.requestService.post(this.register, 'user/signup').subscribe(
        {
          next: (data) => {
            this.dialogService.openDialog(true, this.register.email!, this.register.password!)
          },
          error: (error) => {
            this.dialogService.successMessage = false
            this.dialogService.openDialog(false, this.register.email!, this.register.password!)
          }
        }
      )
    }
  }

  checked = false
}
