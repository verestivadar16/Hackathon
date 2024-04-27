import { Module } from '@nestjs/common';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.services';
//import { NotificationsWebsocketGateway } from './notifications.websocket.gateway';
import { Devices } from '@prisma/client';
import { DatabaseModule } from '../Prisma/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DevicesController],
  providers: [DevicesService],
})
export class DevicesModule {}
