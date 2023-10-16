import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationComponent } from '../template/dialog-animation/dialog-animation.component';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(private dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(DialogAnimationComponent, {
      width: '494px',
      enterAnimationDuration,
      exitAnimationDuration,
      autoFocus: false
    })
  }
}
