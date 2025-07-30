import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User, AuthToken, LoginCredentials, UserRole } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'dpm_token';
  private readonly USER_KEY = 'dpm_user';
  
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();
  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasValidToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials): Observable<{ user: User; token: AuthToken }> {
    // Mock authentication - in real app, this would call the backend API
    return this.mockLogin(credentials).pipe(
      tap(response => {
        this.setSession(response.user, response.token);
      }),
      catchError(error => throwError(() => new Error('Invalid credentials')))
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  refreshToken(): Observable<AuthToken> {
    // Mock token refresh - in real app, this would call the backend API
    const mockToken: AuthToken = {
      accessToken: 'new-mock-jwt-token',
      refreshToken: 'new-mock-refresh-token',
      expiresIn: 3600
    };
    
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(mockToken));
    return of(mockToken);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getToken(): string | null {
    const tokenData = localStorage.getItem(this.TOKEN_KEY);
    if (tokenData) {
      const token: AuthToken = JSON.parse(tokenData);
      return token.accessToken;
    }
    return null;
  }

  hasRole(role: UserRole): boolean {
    const user = this.getCurrentUser();
    return user ? user.role === role : false;
  }

  hasAnyRole(roles: UserRole[]): boolean {
    const user = this.getCurrentUser();
    return user ? roles.includes(user.role) : false;
  }

  private mockLogin(credentials: LoginCredentials): Observable<{ user: User; token: AuthToken }> {
    // Mock users for demonstration
    const mockUsers: User[] = [
      {
        id: '1',
        email: 'admin@dpm.com',
        firstName: 'Admin',
        lastName: 'User',
        role: UserRole.ADMIN,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        email: 'doctor@dpm.com',
        firstName: 'Dr. John',
        lastName: 'Smith',
        role: UserRole.DOCTOR,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        email: 'nurse@dpm.com',
        firstName: 'Jane',
        lastName: 'Doe',
        role: UserRole.NURSE,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    const user = mockUsers.find(u => u.email === credentials.email);
    
    if (user && credentials.password === 'password123') {
      const token: AuthToken = {
        accessToken: 'mock-jwt-token',
        refreshToken: 'mock-refresh-token',
        expiresIn: 3600
      };
      
      return of({ user, token });
    }
    
    return throwError(() => new Error('Invalid credentials'));
  }

  private setSession(user: User, token: AuthToken): void {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  private getUserFromStorage(): User | null {
    const userData = localStorage.getItem(this.USER_KEY);
    return userData ? JSON.parse(userData) : null;
  }

  private hasValidToken(): boolean {
    const tokenData = localStorage.getItem(this.TOKEN_KEY);
    if (!tokenData) return false;
    
    try {
      const token: AuthToken = JSON.parse(tokenData);
      return !!token.accessToken;
    } catch {
      return false;
    }
  }
}