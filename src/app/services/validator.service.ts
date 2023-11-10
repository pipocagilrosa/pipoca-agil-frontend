import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationComponent } from '../template/dialog-animation/dialog-animation.component';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(private dialog: MatDialog) { }

  validatorMessage(type: string) {
    if(type == 'success') {
      this.openDialog("0ms","0ms", "Cadastro efetuado com sucesso!", "Você receberá um código de verificação no seu e-mail.", "assets/check-circle.png")
    } else if(type == 'unsuccess'){
      this.openDialog("0ms","0ms", "E-mail já cadastrado", "O e-mail que você utilizou já foi cadastrado anteriormente. Faça login para ter acesso a sua conta", "assets/check-circle_svgrepo.com.png")
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
