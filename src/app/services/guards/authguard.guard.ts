import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../auth/login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate, CanActivateChild {
constructor(private logonSErvice:LoginService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.logonSErvice.getAuthStatus().then((status:boolean)=>{
        if(status){
          return true
        }else{
          alert("please login to continue")
          this.router.navigate(['login'])
          return false
        }
       })
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute,state);
  }
  
}
