import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent implements OnDestroy {

  constructor(
    private dialogRef: DialogRef<DialogConfirmComponent>,
    private router: Router
  ) { }

  close() {
    this.dialogRef.close()
  }

  ngOnDestroy(): void {
      this.router.navigate(['home'])
  }
}
