import { Component, OnInit } from '@angular/core';
import { DeviceDTO } from '../../models/device-dto';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-device-list-page',
  standalone: true,
  imports: [],
  templateUrl: './device-list-page.component.html',
  styleUrl: './device-list-page.component.scss',
})
export class DeviceListPageComponent implements OnInit {
  mockDevices: DeviceDTO[] = [];

  ngOnInit(): void {
    this.mockDevices = this.deviceService.generateMockDevices();
  }

  constructor(public deviceService: DeviceService) {}
}
