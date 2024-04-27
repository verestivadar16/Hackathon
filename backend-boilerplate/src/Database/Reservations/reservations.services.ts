import { Injectable } from '@nestjs/common';
import { Prisma, Reservations } from '@prisma/client';
import { DatabaseService } from '../Prisma/database.service';
@Injectable()
export class ReservationsService {
  constructor(private prisma: DatabaseService) {}

  async reservationById(id: string): Promise<Reservations | null> {
    return this.prisma.reservations.findFirst({
      where: { id },
    });
  }

  async getAllReservations(): Promise<Reservations[]> {
    return this.prisma.reservations.findMany();
  }

  async reservations(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ReservationsWhereUniqueInput;
    where?: Prisma.ReservationsWhereInput;
    orderBy?: Prisma.ReservationsOrderByWithRelationInput;
  }): Promise<Reservations[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.reservations.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createReservation(
    data: Prisma.ReservationsCreateInput,
  ): Promise<Reservations> {
    console.log(data);
    return this.prisma.reservations.create({
      data,
    });
  }

  async updateReservation(
    where: Prisma.ReservationsWhereUniqueInput,
    data: Prisma.ReservationsUpdateInput,
  ): Promise<Reservations> {
    return this.prisma.reservations.update({
      where: where,
      data: data,
    });
  }

  async deleteReservation(
    where: Prisma.ReservationsWhereUniqueInput,
  ): Promise<Reservations> {
    return this.prisma.reservations.delete({
      where,
    });
  }

  async getTestData(): Promise<Reservations[]> {
    const reservationData: any[] = [
      {
        id: '1',
        roomId: 'A101',
        startTime: '09:00',
        endTime: '11:00',
        userId: 'user123',
        deviceId: 'device001',
        reservedBy: 'John Doe',
        choosenDate: new Date('2024-03-01'),
        disturbingFactor: false,
        description: 'Meeting with client',
        // intervalList: ["09:00-09:30", "10:00-11:00"]
      },
      {
        id: '2',
        roomId: 'B202',
        startTime: '14:00',
        endTime: '15:30',
        userId: 'user456',
        deviceId: 'device002',
        reservedBy: 'Alice Smith',
        choosenDate: new Date('2024-03-02'),
        disturbingFactor: true,
        description: 'Team brainstorming session',
        // intervalList: ["14:00-14:30", "15:00-15:30"]
      },
      {
        id: '3',
        roomId: 'C303',
        startTime: '10:30',
        endTime: '12:00',
        userId: 'user789',
        deviceId: 'device003',
        reservedBy: 'Jane Johnson',
        choosenDate: new Date('2024-03-03'),
        disturbingFactor: false,
        description: 'Training session',
        // intervalList: ["10:30-11:00", "11:30-12:00"]
      },
    ];

    console.log(reservationData);
    return reservationData;
  }
}
