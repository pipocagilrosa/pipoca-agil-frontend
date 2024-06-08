import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenerateToken, ValidateToken } from 'src/app/register';
import { RequestsService } from 'src/app/services/requests.service';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  formDetails!: FormGroup

  generateToken: GenerateToken

  validateToken: ValidateToken

  options = [
    'E-mail',
    'Palavra ou Frase'
  ]

  selectedOption = this.options[0]

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validatorService: ValidatorService,
    private requestService: RequestsService
  ) {
    this.generateToken = new GenerateToken()
    this.validateToken = new ValidateToken()
  }

  validationMessages = this.validatorService.validationMessages

  ngOnInit(): void {
    this.createForm()

  }

  createForm() {
    this.formDetails = this.fb.group({
      dataType: new FormControl(''),
      value: new FormControl('')
    })
  }

  selectOption(event: Event) {
    this.selectedOption = (event.target as HTMLSelectElement).value
  }

  inputTouched() {
    this.setValidation()
  }

  setValidation() {
    if (!this.formDetails.get('value')?.hasValidator(Validators.required)) {
      this.formDetails.get('value')?.addValidators(
        Validators.required
      )
    }
  }

  updateValidity() {
    this.formDetails.get('value')?.updateValueAndValidity()
    this.formDetails.get('value')?.markAsDirty()
  }

  send() {
    this.setValidation()
    this.updateValidity()
    if (this.formDetails.valid) {
      switch (this.selectedOption) {
        case 'E-mail':
          this.generateToken = {
            email: this.formDetails.value.value
          }
          this.requestService.post<GenerateToken>(this.generateToken, 'user/reset-password', false).subscribe({
            next: () => {

              this.router.navigate(['validate-code'])
            },
            error: () => {

            }
          })

          break
        case 'Palavra ou Frase':
          this.validateToken = {
            token: this.formDetails.value.value
          }
          this.requestService.post<ValidateToken>(this.validateToken, 'user/confirm-pass', false).subscribe({
            next: () => {
              this.router.navigate(['reset-password'])
            },
            error: () => {

            }
          })
      }
    }
  }

  navigateBack() {
    this.router.navigate(['login'])
  }
}
