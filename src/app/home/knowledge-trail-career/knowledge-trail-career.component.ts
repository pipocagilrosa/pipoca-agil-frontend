import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Career, Course } from 'src/app/register';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-knowledge-trail-career',
  templateUrl: './knowledge-trail-career.component.html',
  styleUrls: ['./knowledge-trail-career.component.css']
})
export class KnowledgeTrailCareerComponent implements OnInit {

  career?: Career

  constructor(
    private router: Router,
    private requests: RequestsService,
    private activatedRoute: ActivatedRoute
  ) {
      this.career = new Career()
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ career }) => {
      this.career = career
    })
  }
}
