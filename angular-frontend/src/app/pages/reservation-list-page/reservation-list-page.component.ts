import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';
import { ReservationDTO } from '../../models/reservation-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-list-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation-list-page.component.html',
  styleUrl: './reservation-list-page.component.scss',
})
export class ReservationListPageComponent implements OnInit {
  mockReservations: ReservationDTO[] = this.reservationService.generateMockReservations();

  constructor(
    public router: Router,
    public reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    //this.mockReservations = this.reservationService.generateMockReservations();
    console.log('reservation list oninit');
  }

  navToReservationDetailPage(reservation: ReservationDTO): void {
    console.log(
      `Navigating to reservation detail page for reservation with id: ${reservation.id}`
    );
    this.router.navigate([`reservation-detail`]);
  }
}
