import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, tap } from "rxjs";
import { Register } from "src/app/register";
import { RequestsService } from "src/app/services/requests.service";

@Injectable({ providedIn: 'root' })
export class ViewDataResolver implements Resolve<Register> {

  constructor(private requestService: RequestsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Register | Observable<Register> | Promise<Register> {
    let auth!: string
    let sub!: string
    auth = sessionStorage.getItem("auth")!
    sub = sessionStorage.getItem("sub")!
    const path = `user/${sub}/profile`
    return this.requestService.get<Register>(true, path, auth)
  }
 
}