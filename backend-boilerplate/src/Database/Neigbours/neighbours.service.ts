import { Injectable } from '@nestjs/common';
import { Neighbours, Prisma } from '@prisma/client';
import { DatabaseService } from '../Prisma/database.service';
@Injectable()
export class NeighboursService {
  constructor(private prisma: DatabaseService) {}

  async neighbourById(id: string): Promise<Neighbours | null> {
    return this.prisma.neighbours.findFirst({
      where: { id },
    });
  }

  async getAllNeighbours(): Promise<Neighbours[]> {
    return this.prisma.neighbours.findMany();
  }

  async createNeighbour(
    data: Prisma.NeighboursCreateInput,
  ): Promise<Neighbours> {
    return this.prisma.neighbours.create({
      data,
    });
  }

  async updateNeighbour(
    where: Prisma.NeighboursWhereUniqueInput,
    data: Prisma.NeighboursUpdateInput,
  ): Promise<Neighbours> {
    return this.prisma.neighbours.update({
      where: where,
      data: data,
    });
  }

  async deleteNeighbour(
    where: Prisma.NeighboursWhereUniqueInput,
  ): Promise<Neighbours> {
    return this.prisma.neighbours.delete({
      where,
    });
  }
}
