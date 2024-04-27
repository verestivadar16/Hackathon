import { Component, OnInit } from '@angular/core';
import { RoomDTO } from '../../models/room-dto';
import { Router } from '@angular/router';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
})
export class RoomListComponent implements OnInit {
  mockRooms: RoomDTO[] = [];

  constructor(public router: Router, public roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((rooms) => {
      this.mockRooms = rooms;
    });
  }

  navToRoomDetailPage(room: RoomDTO): void {
    console.log(`Navigating to room detail page for room with id: ${room.id}`);
    this.router.navigate([`add-reservation`]);
  }
}
