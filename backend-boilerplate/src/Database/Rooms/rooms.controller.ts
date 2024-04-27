import { ApiTags } from '@nestjs/swagger';

import { Controller, Get, Param } from '@nestjs/common';
import { RoomsService } from './rooms.services';
import { Rooms } from '@prisma/client';
import { Public } from 'src/common/decorators/isPublic.decorator';

@ApiTags('rooms')
@Controller({ version: '1', path: 'rooms' })
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Public()
  @Get()
  async getAllRooms(): Promise<Rooms[]> {
    return this.roomsService.getAllRooms();
  }

  @Public()
  @Get(':id')
  //http://localhost:3000/rooms/1
  async getRoomById(@Param('id') id: string): Promise<Rooms> {
    return this.roomsService.roomById(id);
  }
}
