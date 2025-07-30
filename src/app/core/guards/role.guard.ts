import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(allowedRoles: UserRole[]): Observable<boolean> {
    return this.authService.currentUser$.pipe(
      map(user => {
        if (user && allowedRoles.includes(user.role)) {
          return true;
        } else {
          this.router.navigate(['/dashboard']);
          return false;
        }
      })
    );
  }
}