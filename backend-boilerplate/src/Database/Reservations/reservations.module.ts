import { Reservations } from '@prisma/client';

import { Module } from '@nestjs/common';
import { ReservationsController } from './reservations.controller';

import { ReservationsService } from './reservations.services';
import { DatabaseModule } from '../Prisma/database.module';
//import { NotificationsWebsocketGateway } from './notifications.websocket.gateway';

@Module({
  imports: [DatabaseModule],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule { }