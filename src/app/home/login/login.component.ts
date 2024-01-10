import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/app/register';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true

  register: Register

  loginData!: FormGroup

  constructor(private requests: RequestsService, private fb: FormBuilder) {
    this.register = new Register()
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.loginData = this.fb.group({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  enter() {
    this.register = {
      email: this.loginData.value.email,
      password: this.loginData.value.password
    }
    this.requests.post(this.register, "auth/login").subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      }
    })

  }
}
