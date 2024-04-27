import { ApiTags } from '@nestjs/swagger';
import { Prisma, Reservations } from '@prisma/client';
import { Public } from 'src/common/decorators/isPublic.decorator';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ReservationsService } from './reservations.services';

@ApiTags('reservations')
@Controller({ version: '1', path: 'reservations' })
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Public()
  @Get()
  async getAllReservations(): Promise<Reservations[]> {
    return this.reservationsService.getAllReservations();
  }

  @Public()
  @Get('/testData')
  async getTestData(): Promise<Reservations[]> {
    return this.reservationsService.getTestData();
  }

  @Public()
  @Get(':id')
  //http://localhost:3000/reservation/1
  async getReservationById(@Param('id') id: string): Promise<Reservations> {
    return this.reservationsService.reservationById(id);
  }

  @Public()
  @Post('/create')
  //  http://localhost:3000/reservations/create
  /*{
    "roomId": "1",
    "startDate": "2024-02-25T15:30:00Z",
    "endDate": "2024-03-26T15:30:00Z",
    "userId": "1",
    "programId": "2"
  } */
  async createReservation(
    @Body() data: Prisma.ReservationsCreateInput,
  ): Promise<Reservations> {
    return this.reservationsService.createReservation(data);
  }

  @Public()
  @Post('/update')
  /*{
  "where": {
    "id": "4a90449e-8a7a-415b-9090-3781d11b99ed"
  },
  "data":{
    "roomId": "1",
    "startDate": "2024-01-25T15:30:00Z",
    "endDate": "2024-01-26T15:30:00Z",
    "userId": "1",
    "programId": "2"
  }
}

*/
  async updateDevice(
    @Body()
    body: {
      where: Prisma.ReservationsWhereUniqueInput;
      data: Prisma.ReservationsUpdateInput;
    },
  ): Promise<Reservations> {
    return this.reservationsService.updateReservation(body.where, body.data);
  }

  @Public()
  @Post('/delete')
  //  http://localhost:3000/reservations/delete
  async deleteReservation(
    @Body()
    where: Prisma.ReservationsWhereUniqueInput,
  ): Promise<Reservations> {
    return this.reservationsService.deleteReservation(where);
  }
}
