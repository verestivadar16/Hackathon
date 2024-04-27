
import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.services';
//import { NotificationsWebsocketGateway } from './notifications.websocket.gateway';
import { Rooms } from '@prisma/client';
import { DatabaseModule } from '../Prisma/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RoomsController],
  providers: [ RoomsService],
})
export class RoomsModule {}