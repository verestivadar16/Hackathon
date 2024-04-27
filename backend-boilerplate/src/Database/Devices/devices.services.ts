import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../Prisma/database.service';
import { Devices, Prisma } from '@prisma/client';
@Injectable()
export class DevicesService {
  constructor(private prisma: DatabaseService) {}

  async deviceById(id: string): Promise<Devices | null> {
    return await this.prisma.devices.findFirst({
      where: { id },
    });
  }

  async getAllDevices(): Promise<Devices[]> {
    return this.prisma.devices.findMany();
  }

  async createDevice(data: Prisma.DevicesCreateInput): Promise<Devices> {
    return this.prisma.devices.create({
      data,
    });
  }

  async updateDevice(
    where: Prisma.DevicesWhereUniqueInput,
    data: Prisma.DevicesUpdateInput,
  ): Promise<Devices> {
    return this.prisma.devices.update({
      where: where, // Pass the `where` parameter directly
      data: data, // Pass the `data` parameter directly
    });
  }

  async deleteDevice(where: Prisma.DevicesWhereUniqueInput): Promise<Devices> {
    return this.prisma.devices.delete({
      where,
    });
  }
}
