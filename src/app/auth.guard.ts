import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from "@angular/router";
 
@Injectable({
  providedIn: "root"
})
export class AuthGuard  {
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (sessionStorage.getItem('id')){
      return true;
    }
    return false;
  }
}