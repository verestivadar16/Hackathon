import { Injectable } from '@angular/core';
import { User } from '../models/user';

const USER_KEY = 'authenticated-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveUser(user: User) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  saveToken(token: string) {
    window.localStorage.removeItem('access_token');
    localStorage.setItem('access_token', JSON.stringify(token));
  }

  getToken(): string | null {
    const token = window.localStorage.getItem('access_token');
    if (token) {
      return JSON.parse(token);
    }
    return null;
  }

  getSavedUser(): User | null {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  clean(): void {
    window.localStorage.clear();
  }
}
