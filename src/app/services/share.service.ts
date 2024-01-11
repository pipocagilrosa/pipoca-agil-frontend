import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private scrollSubject = new Subject<string>

  scrollRequested$ = this.scrollSubject.asObservable()
  
  constructor() { }

  requestScroll(target: string) {
    this.scrollSubject.next(target)
  }
}
