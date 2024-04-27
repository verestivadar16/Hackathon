import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../Prisma/database.service';
import { Users, Prisma } from '@prisma/client';
@Injectable()
export class UsersService {
  constructor(private prisma: DatabaseService) {}

  async userById(id: string): Promise<Users | null> {
    return this.prisma.users.findFirst({
      where: { id: id },
    });
  }

  async userByEmail(email: string): Promise<Users | null> {
    return this.prisma.users.findFirst({
      where: { email },
    });
  }

  async getAllUsers(): Promise<Users[]> {
    return await this.prisma.users.findMany();
  }

  async createUser(data: Prisma.UsersCreateInput): Promise<Users> {
    return this.prisma.users.create({
      data,
    });
  }

  async updateUser(
    where: Prisma.UsersWhereUniqueInput,
    data: Prisma.UsersUpdateInput,
  ): Promise<Users> {
    return this.prisma.users.update({
      where: where,
      data: data,
    });
  }

  async deleteUser(where: Prisma.UsersWhereUniqueInput): Promise<Users> {
    return this.prisma.users.delete({
      where,
    });
  }
}
