import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private readonly loginErrorKey = 'loginError';

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

  handleLoginError(): void {
    sessionStorage.setItem(this.loginErrorKey, 'true');
  }

  clearLoginError(): void {
    sessionStorage.removeItem(this.loginErrorKey);
  }

  isLoginError(): boolean {
    return sessionStorage.getItem(this.loginErrorKey) === 'true';
  }
}
