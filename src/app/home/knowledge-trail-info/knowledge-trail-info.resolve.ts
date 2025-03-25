import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, tap } from "rxjs";
import { Career } from "src/app/register";
import { RequestsService } from "src/app/services/requests.service";

@Injectable({ providedIn: 'root' })
export class KnowledgeTrailInfoResolver implements Resolve<Career[]> {

  constructor(private requestService: RequestsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Career[] | Observable<Career[]> | Promise<Career[]> {
    return this.requestService.get<Array<Career>>(false, 'career-tracks')
  }
 
}