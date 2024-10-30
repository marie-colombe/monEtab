import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,  } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { LocalstorageService } from "../services/localstorage.service";
import { Router } from "@angular/router";

export class JwtInterceptor implements HttpInterceptor {
    constructor (private localStorage: LocalstorageService, private router: Router){}
        
        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const token: string | null  = this.localStorage.getToken();
       let authReq: any;
       if (token) {
        request.clone({
            setHeaders: {
                Authorization:`Bearer ${JSON.stringify(token)}`
            }
        })
       } 
       return next.handle(authReq).pipe(
        catchError((err: HttpErrorResponse) =>
        {
            if(err.status === 401 || (err.status === 403 || err.status === 400  && err.error.codeError === "INSUFFICIENT_AUTHENTICATION")){
            this.localStorage.destroy();
            this.router.navigate(["/login"]);
            }
            return throwError(() => new Error(err.error.message || err))

        })
       );     
    }

}