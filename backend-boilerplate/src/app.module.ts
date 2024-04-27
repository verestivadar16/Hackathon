import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './Database/Users/user.module';
import { RoomsModule } from './Database/Rooms/rooms.module';
import { ConfigModule } from '@nestjs/config';
import { NeighbourssModule } from './Database/Neigbours/neighbours.module';
import { ReservationsModule } from './Database/Reservations/reservations.module';
import { DevicesModule } from './Database/Devices/devices.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    RoomsModule,
    NeighbourssModule,
    ReservationsModule,
    DevicesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
