import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';

import { DatabaseModule } from '../Prisma/database.module';
import { UsersService } from './user.services';
//import { NotificationsWebsocketGateway } from './notifications.websocket.gateway';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
