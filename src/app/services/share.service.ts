import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private scrollSubject = new BehaviorSubject<string | null>(null)

  scrollRequested$ = this.scrollSubject.asObservable()

  private accessSubject = new BehaviorSubject<string[] | null>(null)
  
  accessRequired$ = this.accessSubject.asObservable()

  constructor() { }

  requestScroll(target: string) {
    this.scrollSubject.next(target)
  }

  requestAccess(auth: string, sub: string) {
    let values = [auth, sub]
    this.accessSubject.next(values)
  }
}
