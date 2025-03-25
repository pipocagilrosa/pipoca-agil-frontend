import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) {
    }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ careers }) => {
      console.log(careers)
      this.careerList = careers
      console.log(this.careerList)
    })
  }

  goToComponent(career: Career) {    
    this.router.navigate([`/knowledge-trail/${career.id}`])
  }

}