import { Component } from '@angular/core';
import { Register } from './register';
import { RequestsService } from '../services/requests.service';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})  
export class MainComponent {

  hide = true
  hideConfirm = true

  register: Register = {
    username : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    birthDate : new FormControl<Date | null>(null, [
      Validators.required,
      Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/),
      this.ageValidator(18)
    ]),
    password : new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      this.specialValidator  
    ]),
    passConfirm : new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      this.specialValidator
    ])
  } 

  constructor(private requests: RequestsService, private validator: ValidatorService) {

  }

  getErrorMessage(x: any) {
    if(x.hasError('required')) {
      return 'Campo obrigatório'} 
      else if(x.hasError('pattern')) {
      return 'Formato de data inválido'
    } else if(x.hasError('ageTooYoung')) {
      return 'É necessário ter no mínimo 18 anos'
    } else if(x.hasError('minlength')) {
      return 'Mínimo de 6 caracteres'
    } else if(x.hasError('noSpecialCharacter')) {
      return 'A senha deve conter pelo menos 1 caracter especial'
    }
    return ''
  }



  teste(){
    let valueSelected = this.register.birthDate.value
    let selected =  this.register.birthDate
    console.log(typeof valueSelected)

  }

  ageValidator(minAge: number) {
    return (control: AbstractControl) => {
      const birthDate = new Date(control.value)
      const today = new Date()
      const diffMonth = today.getMonth() - birthDate.getMonth()
      const diffDay = today.getDate() - birthDate.getDate()
      let age = today.getFullYear() - birthDate.getFullYear()

      if(diffMonth < 0 || diffMonth === 0 && diffDay < 0) {
        age--
      }

      console.log(age)
      if(age < minAge) {
        return {ageTooYoung: true}
        }
      return null
    }
  }

  specialValidator(control: AbstractControl) {
     const password = control.value
     if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return { noSpecialCharacter: true };
    }
    return null;
  }

  async teste1() {
    // this.validator.openDialog("0ms","0ms")
    let registerY: Register = {
      username : this.register.username.value,
      email : this.register.email.value,
      birthDate : this.register.birthDate.value,
      password : this.register.password.value,
      passConfirm : this.register.passConfirm.value
    }

    this.requests.testPost(registerY).subscribe(
      {
        next: (data) => {
          this.validator.openDialog("0ms","0ms")
        },
        error: (error) => {
          console.log(error.status)
        }
      }
    )
  }

  checked = false
}
