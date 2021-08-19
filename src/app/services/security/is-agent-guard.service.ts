import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAgentGuardService implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (!this.authService.isAgent()) {
      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['']);
      }
      else {
        this.router.navigate(['utilisateur/accueil']);
      }
    }
    return true;
  }
  }
