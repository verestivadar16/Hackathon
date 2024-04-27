// app.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  logOut() {
    this.authService.logout();
  }
  logIn() {
    this.router.navigate(['auth/login']);
  }
  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  navToRooms(): void {
    this.router.navigate(['rooms']);
  }

  navToAddRoom(): void {
    this.router.navigate(['add-room']);
  }

  navToRoomDetail(): void {
    this.router.navigate(['room-detail']);
  }

  navToReservations(): void {
    this.router.navigate(['reservations']);
  }

  navToReservationDetail(): void {
    this.router.navigate(['reservation-detail']);
  }

  navToAddReservation(): void {
    this.router.navigate(['add-reservation']);
  }

  navToDevices(): void {
    this.router.navigate(['devices']);
  }

  navToAddDevice(): void {
    this.router.navigate(['add-device']);
  }
}
