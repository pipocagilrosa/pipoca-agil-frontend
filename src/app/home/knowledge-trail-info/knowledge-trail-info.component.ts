import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Career } from 'src/app/register';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-knowledge-trail-info',
  templateUrl: './knowledge-trail-info.component.html',
  styleUrls: ['./knowledge-trail-info.component.css']
})
export class KnowledgeTrailInfoComponent implements OnInit {

  careerList: Array<Career> = []

  constructor(
      private requests: RequestsService,
      private router: Router
    ) {
    }

  ngOnInit(): void {
    this.requests.get<Array<Career>>(false, 'career-tracks').subscribe({
      next: (data) => {
        this.careerList = data
        console.log(this.careerList)
      }, error: (err) => {
        console.log(err)
      }
    })
  }

  goToComponent(career: Career) {

    localStorage.setItem('careerId', career.id!)
    
    this.router.navigate([`/knowledge-trail/${career.index}`])
  }

}