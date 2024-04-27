import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { RoomDTO } from '../../models/room-dto';
import { RoomService } from '../../services/room.service';
import { DeviceDTO } from '../../models/device-dto';
import { DeviceService } from '../../services/device.service';
import { ReservationService } from '../../services/reservation.service';
import { ReservationDTO } from '../../models/reservation-dto';
import { createReservationDTO } from '../../models/createReservation.dto';

interface Item {
  name: string;
  checked: boolean;
}
@Component({
  selector: 'app-add-reservation-page',
  standalone: true,
  imports: [CommonModule, CalendarModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-reservation-page.component.html',
  styleUrls: ['./add-reservation-page.component.scss'],
})
export class AddReservationPageComponent implements OnInit {
  mockRooms: RoomDTO[] = [];
  mockDevices: DeviceDTO[] = [];
  mockReservations: ReservationDTO[] = [];

  reservationForm = new FormGroup({
    room: new FormControl(''),
    devices: new FormControl(''),
    reservatorsName: new FormControl(''),
    reservationCheckBox: new FormControl(''),
    taskName: new FormControl(''),
    taskCheckBox: new FormControl(''),
    disturbingFactor: new FormControl(''),
    choosenDate: new FormControl(''),
  });

  roomSelected = false;
  clonedReservations: ReservationDTO[] = [];
  selectedDevices: DeviceDTO[] = [];
  periods: string[] = [];

  isReservation: boolean = false;
  isTask: boolean = false;
  isDisturbing: boolean = false;

  intervalList: string[] = [];
  isSelected: boolean[] = new Array(this.intervalList.length).fill(false);
  selectedTime: string[] = [];

  ngOnInit() {
    // this.roomSelected = false;

    this.generateTimeSlots();
  }

  constructor(
    public roomService: RoomService,
    public deviceService: DeviceService,
    public reservationService: ReservationService
  ) {
    this.roomService.getRooms().subscribe((rooms) => {
      this.mockRooms = rooms;
    });
    this.deviceService.getDevices().subscribe((devices) => {
      this.mockDevices = devices;
    });

    this.reservationService.getReservations().subscribe((reservations) => {
      this.mockReservations = reservations;
      this.clonedReservations = this.mockReservations;

    });
  }

  selectDevice(device: DeviceDTO) {
    this.mockDevices = this.mockDevices.filter((d) => d !== device);
    this.selectedDevices.push(device);
    this.filterByDevice();
  }

  unSelectDevice(device: DeviceDTO) {
    this.selectedDevices = this.selectedDevices.filter((d) => d !== device);
    this.mockDevices.push(device);
    this.periods = [];
    this.filterByDevice();
  }

  filterByDevice() {
    this.selectedDevices.forEach((device) => {
      let reservationsForDevice = this.clonedReservations.filter(
        (reservation) => reservation.deviceId === device.name
      );

      reservationsForDevice.forEach((reservation) => {
        this.periods.push(`${reservation.startTime} - ${reservation.endTime}`);
      });
    });
    return this.periods;
  }
  allFilter() {
    this.mockReservations = this.clonedReservations;

    this.mockReservations = this.mockReservations.filter(
      (x) => x.choosenDate.toString().slice(0, 10) === this.reservationForm.value.choosenDate
    );
    this.mockReservations = this.mockReservations.filter(
      (x) => this.mockRooms.find(room => room.id === x.roomId)?.name === this.reservationForm.value.room
    );

  }

  onDateChange($event: Event) {
    this.allFilter()
    // console.log(this.reservationForm.value.choosenDate);
  }

  onRoomChange(event: any) {
    this.allFilter()
  }

  isTimeSlotReserved(timeSlot: any): boolean {
    const [slotStart, slotEnd] = timeSlot.display.split(' - ');

    for (let reservation of this.mockReservations) {
      if (slotStart < reservation.endTime && slotEnd > reservation.startTime) {
        return true;
      }
    }

    for (let period of this.periods) {
      const [periodStart, periodEnd] = period.split(' - ');
      if (slotStart >= periodStart && slotEnd <= periodEnd) {
        return true;
      }
    }

    return false;
  }

  changeTaskState() {
    this.isTask = !this.isTask;
  }

  changeReservationState() {
    this.isReservation = !this.isReservation;
  }

  changeDisturbingState() {
    this.isDisturbing = !this.isDisturbing;
  }

  submitReservation() {
    console.log('Submitting reservation...');
    console.log(
      this.reservationForm.value,
      this.selectedTime,
      this.selectedDevices
    );
    const splittedTime = this.selectedTime.map((time) => time.split(' - '));
    const reservationPeriod = {
      startTime: splittedTime[0][0],
      endTime: splittedTime[splittedTime.length - 1][1],
    };

    let dateObject;
    if (this.reservationForm.value.choosenDate) {
      dateObject = new Date(this.reservationForm.value.choosenDate);
    };
    const Devices: string[] = ['1', '2']
    const newReservation: createReservationDTO = {
      roomId: this.mockRooms.find(room => room.name === this.reservationForm.value.room)?.id,
      userId: '1',
      choosenDate: dateObject,
      description: 'teszt',
      deviceId: '1',
      disturbingFactor: this.isDisturbing,
      startTime: reservationPeriod.startTime,
      endTime: reservationPeriod.endTime,
      devicesId: Devices,
    }
    this.reservationService.submitReservation(newReservation).subscribe((response) => { console.log(response); });
    // this.roter.navigate('reservation');
  }

  generateTimeSlots(): void {
    const startTime = 8;
    const endTime = 21;
    const interval = 30;

    for (let hour = startTime; hour < endTime; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        let startTimeString = this.formatTime(hour, minute);
        let endTimeString = this.formatTime(hour, minute + interval);

        let timeSlot = `${startTimeString} - ${endTimeString}`;
        this.intervalList.push(timeSlot);
      }
    }
    this.isSelected = new Array(this.intervalList.length).fill(false);
  }

  toggleColor(index: number): void {
    const selectedSlot = this.intervalList[index];

    if (this.isTimeSlotReserved({ display: selectedSlot })) {
      return;
    }

    this.isSelected[index] = !this.isSelected[index];
    const selectedIndex = this.selectedTime.indexOf(selectedSlot);

    if (this.isSelected[index] && selectedIndex === -1) {
      this.selectedTime.push(selectedSlot);
    } else if (!this.isSelected[index] && selectedIndex !== -1) {
      this.selectedTime.splice(selectedIndex, 1);
    }
  }

  getRowTimeSlots(rowIndex: number): { index: number; display: string }[] {
    const rowSize = 3;
    const startIndex = rowIndex * rowSize;
    const endIndex = Math.min(startIndex + rowSize, this.intervalList.length);
    const rowTimeSlots = this.intervalList
      .slice(startIndex, endIndex)
      .map((slot, index) => ({ index: startIndex + index, display: slot }));
    return rowTimeSlots;
  }

  formatTime(hour: number, minute: number): string {
    if (minute >= 60) {
      minute -= 60;
      hour += 1;
    }

    let formattedHour = ('0' + hour).slice(-2);
    let formattedMinute = ('0' + minute).slice(-2);

    return `${formattedHour}:${formattedMinute}`;
  }
}
