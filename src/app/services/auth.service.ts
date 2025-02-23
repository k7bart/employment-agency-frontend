import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly isLoggedIn = computed(() => !!this.token());

  private http = inject(HttpClient);
  private router = inject(Router);

  private token = signal<string | null>(null);
  private tokenTimer: ReturnType<typeof setTimeout> | null = null;

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');

    if (!token || !expirationDate) {
      return null;
    }

    return {
      token,
      expirationDate: new Date(expirationDate),
    };
  }

  private handleAuth(token: string, expiresIn: number) {
    this.token.set(token);
    this.setAuthTimer(expiresIn);

    const expirationDate = new Date(Date.now() + expiresIn * 1000);
    this.saveAuthData(token, expirationDate);

    this.router.navigate(['/']);
  }

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  autoAuthUser() {
    const authData = this.getAuthData();

    if (!authData) return;

    const expiresIn = authData.expirationDate.getTime() - Date.now();

    if (expiresIn) {
      this.token.set(authData.token);

      this.setAuthTimer(expiresIn / 1000);
    }
  }

  getToken() {
    return this.token();
  }

  login(email: User['email'], password: User['password']) {
    this.http
      .post<{ token: string; expiresIn: number }>(
        'http://localhost:8080/auth/login',
        {
          email,
          password,
        },
      )
      .subscribe((response) => {
        const { token, expiresIn } = response;

        if (token) {
          this.handleAuth(token, expiresIn);
        }
      });
  }

  logout() {
    this.token.set(null);

    if (this.tokenTimer !== null) {
      clearTimeout(this.tokenTimer);
    }

    this.clearAuthData();

    this.router.navigate(['/']);
  }

  signup(email: User['email'], password: User['password']) {
    this.http
      .post<{ token: string; expiresIn: number }>(
        'http://localhost:8080/auth/signup',
        {
          email,
          password,
        },
      )
      .subscribe((response) => {
        const { token, expiresIn } = response;

        if (token) {
          this.handleAuth(token, expiresIn);
        }
      });
  }
}
