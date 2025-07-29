import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from "@angular/router";
 
@Injectable({
  providedIn: "root"
})
export class loginGuard  {
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if (sessionStorage.getItem('token')) {
        return true
      } else {
        return false
      }
  
  }
}