import { Component, OnInit } from '@angular/core';
import { Register } from './register';
import { RequestsService } from '../services/requests.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ValidatorService } from '../services/validator.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  accountDetails!: FormGroup
  hide = true
  hideConfirm = true

  register!: Register

  birthDate: any

  constructor(private requests: RequestsService, private validator: ValidatorService, private fb: FormBuilder) {

  }

  validationMessages = {
    'name': [
      {
        type: 'required', message: 'Campo obrigatório'
      },
      {
        type: 'invalidChar', message: 'Não são permitidos caracteres especiais'
      },
      {
        type: 'notSpace', message: 'Por favor, digite nome e sobrenome'
      }
    ],
    'email': [
      {
        type: 'required', message: 'Campo obrigatório'
      }
    ],
    'birthDate': [
      {
        type: 'required', message: 'Campo obrigatório'
      },
      {
        type: 'ageTooYoung', message: 'Usuário deve ser maior de 18 anos'
      }
    ]
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.accountDetails = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        this.spaceValidator(),
        this.characterValidator()
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      birthDate: new FormControl('',[
        Validators.required,
        this.ageValidator(18)
      ])
    })
  }

  spaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /\s/
      if(!regex.test(control.value)) {
        return {notSpace : true}
      }
      return null   
    }
  }

  characterValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /^[a-zA-Z ]*$/
      if(!regex.test(control.value)) {
        return {invalidChar : true}
      }
      return null
    }
  }

  getErrorMessage(x: any) {
    if (x.hasError('required')) {
      return 'Campo obrigatório'
    }
    else if (x.hasError('pattern')) {
      return 'Formato de data inválido'
    } else if (x.hasError('ageTooYoung')) {
      return 'É necessário ter no mínimo 18 anos'
    } else if (x.hasError('minlength')) {
      return 'Mínimo de 6 caracteres'
    } else if (x.hasError('noSpecialCharacter')) {
      return 'A senha deve conter pelo menos 1 caracter especial'
    }
    return ''
  }

  teste() {
    let valueSelected = this.register.birthDate.value
    let selected = this.register.birthDate
    console.log(typeof valueSelected)

  }

  ageValidator(minAge: number) {
    return (control: AbstractControl) => {
      const birthDate = new Date(control.value)
      const today = new Date()
      const diffMonth = today.getMonth() - birthDate.getMonth()
      const diffDay = today.getDate() - birthDate.getDate()
      let age = today.getFullYear() - birthDate.getFullYear()

      if (diffMonth < 0 || diffMonth === 0 && diffDay < 0) {
        age--
      } 
      if (age < minAge) {
        return { ageTooYoung: true }
      }
      return null
    }
  }

  specialValidatorx(control: AbstractControl) {
    const password = control.value
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return { noSpecialCharacter: true };
    }
    return null;
  }

  async teste1() {
    // this.validator.openDialog("0ms","0ms")
    let registerY: Register = {
      username: this.register.username.value,
      email: this.register.email.value,
      birthDate: this.register.birthDate.value,
      password: this.register.password.value,
      passConfirm: this.register.passConfirm.value
    }

    this.requests.testPost(registerY).subscribe(
      {
        next: (data) => {
          this.validator.openDialog("0ms", "0ms")
        },
        error: (error) => {
          console.log(error.status)
        }
      }
    )
  }

  checked = false
}
