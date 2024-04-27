import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservationDTO } from '../models/reservation-dto';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  mockReservations: ReservationDTO[] = [];

  apiUrl = 'http://localhost:3000/reservations';

  constructor(private http: HttpClient) { }

  submitReservation(reservation: any) {
    console.log(reservation);
    return this.http.post<any>(this.apiUrl + '/createWithDevices', reservation);
  }
  getReservations() {
    return this.http.get<any>(this.apiUrl);
  }
  generateMockReservations() {
    const timeSlots = [
      '08:00 - 08:30',
      '08:30 - 09:00',
      '09:00 - 09:30',
      '09:30 - 10:00',
      '10:00 - 10:30',
      '10:30 - 11:00',
      '11:00 - 11:30',
      '11:30 - 12:00',
      '12:00 - 12:30',
      '12:30 - 13:00',
      '13:00 - 13:30',
      '13:30 - 14:00',
      '14:00 - 14:30',
      '14:30 - 15:00',
      '15:00 - 15:30',
      '15:30 - 16:00',
      '16:00 - 16:30',
      '16:30 - 17:00',
      '17:00 - 17:30',
      '17:30 - 18:00',
      '18:00 - 18:30',
      '18:30 - 19:00',
      '19:00 - 19:30',
      '19:30 - 20:00',
      '20:00 - 20:30',
      '20:30 - 21:00',
    ];

    for (let i = 0; i < 10; i++) {
      const randomTimeSlot =
        timeSlots[Math.floor(Math.random() * timeSlots.length)];
      const [startTime, endTime] = randomTimeSlot.split(' - ');

      this.mockReservations.push({
        id: 'id' + i,
        roomId: 'Room ' + (i + 1), // Modified line
        startTime: startTime,
        endTime: endTime,
        userId: 'userId' + i,
        deviceId: 'Device ' + i,
        reservedBy: 'reservedBy' + i,
        choosenDate: new Date(),
        disturbingFactor: false,
        description: 'description' + i,
      });
    }
    return this.mockReservations;
  }
}
