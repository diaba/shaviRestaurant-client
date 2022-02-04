import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { LoginService } from './login.service';
import { TokenStorageService } from './token-storage.service';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    // constructor(
    //     private router: Router , private _token : TokenStorageService
    // ) {}
    constructor(
        private loginService: LoginService,
        private router: Router
      ) {}
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     const user = this._token.getUser();
    //     if (user) {
    //         // authorised so return true
    //         console.log("CanActivate "+user);
            
    //         return true;
    //     }

    //     // not logged in so redirect to login page with the return url
    //     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    //     return false;
    // }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean> {
        return this.loginService.isLoggedIn         // {1}
          .pipe(
            take(1),                              // {2} 
            map((isLoggedIn: boolean) => {         // {3}
              if (!isLoggedIn){
                this.router.navigate(['/login']);  // {4}
                return false;
              }
              return true;
            })
          )
      }
    }
