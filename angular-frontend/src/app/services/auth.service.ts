import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { AuthResponse } from '../models/auth-response';
import { jwtDecode } from 'jwt-decode';
import { AuthUserResponse } from '../models/authUserResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AuthenticatedUser$ = new BehaviorSubject<User | null>(null);
  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router
  ) { }
  login(email: string, password: string) {
    return this.http.request<AuthResponse>('post', 'http://localhost:3000/auth/login',
      {
        body: { email, password },
        withCredentials: true
      }).pipe(
        catchError(err => {
          console.log(err);
          let errorMessage = 'An unknown error occurred!';
          if (err.error.message === 'Bad credentials') {
            errorMessage = 'The email address or password you entered is invalid'
          }
          return throwError(() => new Error(errorMessage))
        }),
        tap(
          user => {
            const decodeduser: AuthUserResponse = jwtDecode(user.access_token)
            const extractedUser: User = {
              email: decodeduser.email,
              id: decodeduser.id,
              role: decodeduser.role
            }
            this.storageService.saveUser(extractedUser);
            this.storageService.saveToken(user.access_token);
            this.AuthenticatedUser$.next(extractedUser);
          }
        )
      );
  }

  autoLogin() {
    const userData = this.storageService.getSavedUser();
    if (!userData) {
      return;
    }
    this.AuthenticatedUser$.next(userData);
  }

  logout() {
    this.http.request('post', 'http://localhost:3000/auth/logout', {
      withCredentials: true
    }).subscribe({
      next: () => {
        this.storageService.clean();
        this.AuthenticatedUser$.next(null);
        this.router.navigate(['/auth/login']);
      }
    })

  }

  refreshToken() {
    return this.http.request('post', 'http://localhost:8086/api/v1/auth/refresh-token-cookie', {
      withCredentials: true
    })
  }
  /*
  private _isLoggedIn = false;

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  logIn(): void {
    this._isLoggedIn = true;
  }

  logOut(): void {
    this._isLoggedIn = false;
  }
  */
}
