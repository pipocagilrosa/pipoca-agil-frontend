import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-dialog-animation',
  templateUrl: './dialog-animation.component.html',
  styleUrls: ['./dialog-animation.component.css']
})
export class DialogAnimationComponent {

  constructor(public dialogRef: DialogRef<DialogAnimationComponent>,
    private validator: ValidatorService,
    ) {

  }

  successMessage = this.validator.successMessage

  close() {
    this.dialogRef.close()
  }
}
