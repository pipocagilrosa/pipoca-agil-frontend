import { Component } from '@angular/core';
import { Register } from './register';
import { RequestsService } from '../services/requests.service';
import { FormControl, Validators } from '@angular/forms';
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
    birthDate : new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)
    ]),
    password : new FormControl<Date | null>(null, [Validators.required]),
    passConfirm : new FormControl('', [Validators.required])
  } 

  constructor(private requests: RequestsService, private validator: ValidatorService) {

  }

  getErrorMessage(x: any) {
    if(x.hasError('required')) {
      return 'Campo obrigatório'} 
      else if(x.hasError('pattern')) {
      return 'Formato de data inválido'
    } else {
      return ''
    }
  }

  teste(){
    let valueSelected = this.register.birthDate.value
    let selected =  this.register.birthDate
    console.log(typeof valueSelected)

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
