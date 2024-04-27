import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  submitUser(userName: string, userPassword: string) {
    // TODO: Submit device to server
    console.log(userName, userPassword);
  }
}
