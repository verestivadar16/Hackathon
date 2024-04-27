import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RoomService } from '../../services/room.service';
import { RoomDTO } from '../../models/room-dto';
import { ToasterService } from '../../services/message.service';

@Component({
  selector: 'app-add-room-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-room-page.component.html',
  styleUrl: './add-room-page.component.scss',
})
export class AddRoomPageComponent {
  currentDate: Date = new Date();
  roomForm = new FormGroup({
    roomName: new FormControl(''),
    roomNumber: new FormControl(''),
    roomFloor: new FormControl(''),
    roomCapacity: new FormControl(''),
    roomDescription: new FormControl(''),
    // roomImageURL: new FormControl(''),
  });

  constructor(public roomService: RoomService, public toasterService: ToasterService) { }

  submitRoom() {
    const room: RoomDTO = {
      id: '0',
      name: this.roomForm.value.roomName ?? '',
      number: Number(this.roomForm.value.roomNumber) ?? 0,
      floor: Number(this.roomForm.value.roomFloor) ?? 0,
      capacity: Number(this.roomForm.value.roomCapacity) ?? 0,
      description: this.roomForm.value.roomDescription ?? '',
      imageURL: '',
    };
    this.roomService.submitRoom(room).subscribe({
      next: (data) => {
        this.toasterService.success('This is a success message!', 'Success');
        console.log(data)
      },
      error: () => {
        this.toasterService.error('This is an error message!', 'Error');
      },
    });
    console.log('submitting room');
  }

  renderCalendar(year: number, month: number): void {
    // Implementation of renderCalendar function remains the same as in the original code
    // You can directly copy the renderCalendar function from the original code here
  }

  prevMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.renderCalendar(this.currentDate.getFullYear(), this.currentDate.getMonth());
  }

  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.renderCalendar(this.currentDate.getFullYear(), this.currentDate.getMonth());
  }
}
