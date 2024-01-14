import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/register';
import { RequestsService } from 'src/app/services/requests.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true

  register: Register

  loginData!: FormGroup

  constructor(
    private requests: RequestsService,
    private fb: FormBuilder,
    private shareService: ShareService,
    private router: Router
  ) {
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
    let auth
    let sub
    this.register = {
      email: this.loginData.value.email,
      password: this.loginData.value.password
    }
    this.requests.post(this.register, "auth/login").subscribe({
      next: (data: any) => {
        console.log()
        auth = data.token
        sub = data.sub
        this.shareService.requestAccess(auth, sub)
        this.router.navigate(['user-data'])
      },
      error: (err) => {
        console.log(err)
      }
    })

  }
}
