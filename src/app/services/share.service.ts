import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private readonly loginErrorKey = 'loginError';

  private loadingSubject = new BehaviorSubject<Boolean>(false)

  loadingRequested$ = this.loadingSubject.asObservable()

  private scrollSubject = new BehaviorSubject<string | null>(null)

  scrollRequested$ = this.scrollSubject.asObservable()

  private tokenSubject = new BehaviorSubject<string[] | null>(null)

  tokenRequested$ = this.tokenSubject.asObservable()

  constructor() { }

  showLoadingIcon() {
    this.loadingSubject.next(true)
  }

  hideLoadingIcon() {
    this.loadingSubject.next(false)
  }

  requestScroll(target: string | null) {
    this.scrollSubject.next(target)
  }

  requestToken(type: string, value: string) {
    let target = [type, value]
    this.tokenSubject.next(target)
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
