import { ApiTags } from '@nestjs/swagger';
import { Devices, Prisma } from '@prisma/client';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { DevicesService } from './devices.services';
import { Public } from 'src/common/decorators/isPublic.decorator';

@ApiTags('devices')
@Controller({ version: '1', path: 'device' })
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get()
  //  http://localhost:3000/device
  async getAllDevices(): Promise<Devices[]> {
    return this.devicesService.getAllDevices();
  }

  @Public()
  @Get(':id')
  //  http://localhost:3000/device/2
  async getDeviceById(@Param('id') id: string): Promise<Devices> {
    return this.devicesService.deviceById(id);
  }

  @Public()
  @Post('/create')
  //  http://localhost:3000/create
  /*{
    "name": "Szemetes",
    "isAvailable": true,
    "reservation": {
      // Nested reservation data if needed
    }
  } */
  async createDevice(
    @Body() data: Prisma.DevicesCreateInput,
  ): Promise<Devices> {
    return this.devicesService.createDevice(data);
  }

  @Public()
  @Post('/update')
  /*{
  "where": {
    "id": "1"
  },
  "data": {
    "name": "Szemet Lapat",
    "isAvailable": true,
    "reservation": {
      // Nested reservation data if needed
    }
  }
}
*/
  async updateDevice(
    @Body()
    body: {
      where: Prisma.DevicesWhereUniqueInput;
      data: Prisma.DevicesUpdateInput;
    },
  ): Promise<Devices> {
    return this.devicesService.updateDevice(body.where, body.data);
  }

  @Public()
  @Post('/delete')
  //  http://localhost:3000/delete
  async deleteDevice(
    @Body()
    where: Prisma.DevicesWhereUniqueInput,
  ): Promise<Devices> {
    return this.devicesService.deleteDevice(where);
  }
}
