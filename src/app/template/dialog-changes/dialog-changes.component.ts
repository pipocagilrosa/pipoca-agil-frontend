import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RequestsService } from 'src/app/services/requests.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-dialog-changes',
  templateUrl: './dialog-changes.component.html',
  styleUrls: ['./dialog-changes.component.css']
})
export class DialogChangesComponent implements OnInit {

  auth!: string
  sub!: string

  constructor(
    private requests: RequestsService,
    private shareService: ShareService,
    public dialogRef: MatDialogRef<DialogChangesComponent>
  ) {}

  ngOnInit(): void {
    this.shareService.accessRequired$.subscribe((values) => {
      this.auth = values![0],
      this.sub = values![1]
    })
  }

  deleteAccount() {
    this.requests.delete(this.sub, this.auth, "disable").subscribe({
      next: (data) => {
        console.log(data)
        this.dialogRef.close()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
