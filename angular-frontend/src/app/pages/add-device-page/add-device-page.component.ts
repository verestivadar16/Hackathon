import { Component, OnInit } from '@angular/core';
import { DeviceDTO } from '../../models/device-dto';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DeviceService } from '../../services/device.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-device-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-device-page.component.html',
  styleUrls: ['./add-device-page.component.scss'],
})
export class AddDevicePageComponent {
  deviceForm = new FormGroup({
    deviceName: new FormControl(''),
    deviceDescription: new FormControl(''),
  });

  constructor(public deviceService: DeviceService) {}

  submitDevice() {
    this.deviceService.submitDevice(
      this.deviceForm.value.deviceName ?? '',
      this.deviceForm.value.deviceDescription ?? ''
    );
  }
}
