import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, tap } from "rxjs";
import { Career } from "src/app/register";
import { RequestsService } from "src/app/services/requests.service";

@Injectable({ providedIn: 'root' })
export class KnowledgeTrailCareerResolver implements Resolve<Career> {

  constructor(private requestService: RequestsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Career | Observable<Career> | Promise<Career> {
    const id = route.paramMap.get('career')
    const path = `career-tracks/${id}/categories`
    return this.requestService.get<Career>(false, path)
  }
 
}