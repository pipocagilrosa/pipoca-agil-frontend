import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { ShareService } from "./services/share.service";

export function loadingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

    const shareService = inject(ShareService)

    shareService.showLoadingIcon()

    return next(req).pipe(
        finalize(() => {
            shareService.hideLoadingIcon()
        })
    );
}