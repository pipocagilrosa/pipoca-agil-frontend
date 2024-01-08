import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/register';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  register!: Register

  constructor(private requests: RequestsService) {

  }

  ngOnInit(): void {

    let auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvdWdsYXN0ZXN0ZUBnbWFpbC5jb20iLCJzdWIiOiI4YmI3NTg1My1lMmI2LTQ1MmYtOGFjZC1iM2Y5ZDFjODk3ZWMiLCJpYXQiOjE3MDQ2NjYyNjAsImV4cCI6MTcwNjY1MzQ2MH0.OccFCZaYuAJpG-KVXOy-Py7BYu1xeA96HP9SsuzqoW4'
    let sub = '8bb75853-e2b6-452f-8acd-b3f9d1c897ec'
    let response = this.requests.get<Register>(sub, auth).subscribe({
      next:(data) => {this.register = {
        name: data.name,
        email: data.email,
        birthDate: data.birthDate,
        password: "*******"
      }
      for(let data in this.register) {
        console.log(data)
      }
    },
      error:(error) => {
        console.log(error)
      }
    })
    
  }
}
