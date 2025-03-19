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

  career?: Career

  constructor(
    private router: Router,
    private requests: RequestsService) {
      this.career = new Career()
  }

  ngOnInit(): void {
    const id = localStorage.getItem('careerId')
    if (id) {
      this.career!.id = id
    }

    // Corrigir para que ao invés de retornar um array de courses retornar um objeto career
    const path = `career-tracks/${this.career!.id}/courses`
    this.requests.get<Career>(false, path).subscribe({
      next: (data) => {
        this.career = data
      }, error: (err) => {
        console.log(err)
      }
    })
  }
}
