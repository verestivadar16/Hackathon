import { Injectable } from '@angular/core';
import { DeviceDTO } from '../models/device-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  mockDevices: DeviceDTO[] = [];
  constructor(private http: HttpClient) { }

  submitDevice(deviceName: string, deviceDescription: string) {
    // TODO: Submit device to server
    return this.http.request<any>('post', 'http://localhost:3000/...');
  }

  getDevices() {
    return this.http.request<any>('get', 'http://localhost:3000/device');
  }

  generateMockDevices(): DeviceDTO[] {
    for (let i = 1; i <= 12; i++) {
      const device: DeviceDTO = {
        id: i.toString(),
        name: `Device ${i}`,
        isAvailable: true,
        //description: `Description for Device ${i}`,
      };

      this.mockDevices.push(device);
    }

    return this.mockDevices;
  }
}
