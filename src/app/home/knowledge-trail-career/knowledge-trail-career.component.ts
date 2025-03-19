import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Career, Course } from 'src/app/register';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-knowledge-trail-career',
  templateUrl: './knowledge-trail-career.component.html',
  styleUrls: ['./knowledge-trail-career.component.css']
})
export class KnowledgeTrailCareerComponent implements OnInit {

  careerId?: string
  courseList: Array<Course> = []

  constructor(
    private router: Router,
    private requests: RequestsService) {
  }

  ngOnInit(): void {
    const id = localStorage.getItem('careerId')
    if (id) {
      this.careerId = id
    }

    // Corrigir para que ao invés de retornar um array de courses retornar um objeto career
    const path = `career-tracks/${this.careerId}/courses`
    this.requests.get<Array<Course>>(false, 'career-tracks').subscribe({
      next: (data) => {
        this.courseList = data
      }, error: (err) => {
        console.log(err)
      }
    })
  }
}
