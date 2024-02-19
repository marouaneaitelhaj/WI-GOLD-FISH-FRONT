
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        // Check if token is present in local storage
        const token = localStorage.getItem('token');
        if (token) {
            // Token exists, redirect to homepage
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
