import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token?: string;

  constructor(private http: HttpClient) {}

  getToken() {
    return this.token;
  }

  createUser(email: User['email'], password: User['password']) {
    return this.http.post<User>('http://localhost:8080/auth/signup', {
      email,
      password,
    });
  }

  login(email: User['email'], password: User['password']) {
    this.http
      .post<{ token: string }>('http://localhost:8080/auth/login', {
        email,
        password,
      })

      .subscribe((response) => {
        const { token } = response;
        this.token = token;
      });
  }
}
