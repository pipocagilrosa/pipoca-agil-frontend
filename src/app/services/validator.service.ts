import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationComponent } from '../template/dialog-animation/dialog-animation.component';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(private dialog: MatDialog) { }

  validatorMessage(type: string) {
    let time = "0ms"
    let title: any
    let text: any
    let img: any
    if(type == 'success') {
      title = "Cadastro efetuado com sucesso!"
      text = "Você receberá um código de verificação no seu e-mail."
      img = "assets/check-circle.png"
      this.openDialog(time, time, title, text, img)
    } else if(type == 'unsuccess'){
      title = "E-mail já cadastrado"
      text = "O e-mail que você utilizou já foi cadastrado anteriormente. Faça login para ter acesso a sua conta"
      img = "assets/check-circle_svgrepo.com.png"
      this.openDialog(time, time, title, text, img)
    }
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, title: string, text: string, img: string) {
    this.dialog.open(DialogAnimationComponent, {
      width: '494px',
      enterAnimationDuration,
      exitAnimationDuration,
      autoFocus: false,
      data: {
        title: title,
        message: text,
        image: img
      }
    })
  }
  
}
