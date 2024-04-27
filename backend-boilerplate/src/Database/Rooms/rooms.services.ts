import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../Prisma/database.service';
import { Prisma, Rooms } from '@prisma/client';

@Injectable()
export class RoomsService {
    constructor(private prisma: DatabaseService) {}
  
    async roomById(
      id:string): Promise<Rooms | null> {
      return this.prisma.rooms.findFirst({
        where: {id},
      });
    }

    async getAllRooms(): Promise<Rooms[]> {
      return this.prisma.rooms.findMany();
    }
  
    async rooms(params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.RoomsWhereUniqueInput;
      where?: Prisma.RoomsWhereInput;
      orderBy?: Prisma.RoomsOrderByWithRelationInput;
    }): Promise<String> {
      const { skip, take, cursor, where, orderBy } = params;
      let rooms = await this.prisma.rooms.findMany();
      console.log(rooms)
      return 'rooms';
    }
  
    async createRoom(data: Prisma.RoomsCreateInput): Promise<Rooms> {
      return this.prisma.rooms.create({
        data,
      });
    }
  
    async updateRoom(params: {
      where: Prisma.RoomsWhereUniqueInput;
      data: Prisma.RoomsUpdateInput;
    }): Promise<Rooms> {
      const { where, data } = params;
      return this.prisma.rooms.update({
        data,
        where,
      });
    }
  
    async deleteRoom(where: Prisma.RoomsWhereUniqueInput): Promise<Rooms> {
      return this.prisma.rooms.delete({
        where,
      });
    }
  }
