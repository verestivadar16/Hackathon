
import { Module } from '@nestjs/common';
import { NeighboursController } from './neighbours.controller';
import { NeighboursService } from './neighbours.service';
//import { NotificationsWebsocketGateway } from './notifications.websocket.gateway';
import { Neighbours } from '@prisma/client';
import { DatabaseModule } from '../Prisma/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NeighboursController],
  providers: [ NeighboursService],
})
export class NeighbourssModule {}