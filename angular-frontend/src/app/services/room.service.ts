import { Injectable } from '@angular/core';
import { RoomDTO } from '../models/room-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  mockRooms: RoomDTO[] = [];

  constructor(private http: HttpClient) { }

  submitRoom(room: RoomDTO) {
    // TODO: Submit room to server
    return this.http.request<any>('get', 'http://localhost:3000/auth/profile');
  }

  getRooms() {
    return this.http.request<any>('get', 'http://localhost:3000/rooms');
  }
}
