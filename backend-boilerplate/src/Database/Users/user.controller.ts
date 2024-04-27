import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Prisma, Users } from '@prisma/client';
import { Public } from 'src/common/decorators/isPublic.decorator';

import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { UsersService } from './user.services';

@ApiTags('users')
@Controller({ version: '1', path: 'users' })
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  //  http://localhost:3000/users
  async getAllusers(): Promise<Users[]> {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  // http://localhost:3000/users/2
  @ApiOperation({ summary: 'Select all users' })
  public async getUser(@Param('id') id): Promise<Users> {
    try {
      const users = await this.userService.userById(id);
      return users;
    } catch (error) {
      throw new HttpException(
        'Failed to get user. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Public()
  @Get(':email')
  //http://localhost:3000/users/tivadar@gmail.com
  async getUserByEmail(@Param('email') email: string): Promise<Users> {
    return this.userService.userByEmail(email);
  }

  @Public()
  @Post('/create')
  //  http://localhost:3000/create
  /*{
    "userName": "Jancsi",
    "tel": "0711111111",
    "email": "jancsi@email.com",
    "passwordHash": "a9669b23c4091e2c098883504e59a288ac7557a5d3e52f52677670a0f13f5e1a",
    "role": "admin"
}
 */
  async createUser(@Body() data: Prisma.UsersCreateInput): Promise<Users> {
    return this.userService.createUser(data);
  }

  @Public()
  @Post('/update')
  /*
{
  "where": {
    "id": "804c93ad-c720-49cb-8289-99deb75956b3"
  },
  "data": 
{
    "userName": "Jancsi2",
    "tel": "0711111111",
    "email": "jancsi@email.com",
    "passwordHash": "a9669b23c4091e2c098883504e59a288ac7557a5d3e52f52677670a0f13f5e1a",
    "role": "admin"
}
}

*/
  async updateDevice(
    @Body()
    body: {
      where: Prisma.UsersWhereUniqueInput;
      data: Prisma.UsersUpdateInput;
    },
  ): Promise<Users> {
    return this.userService.updateUser(body.where, body.data);
  }
  @Public()
  @Post('/delete')
  //  http://localhost:3000/delete
  async deleteUser(
    @Body()
    where: Prisma.UsersWhereUniqueInput,
  ): Promise<Users> {
    return this.userService.deleteUser(where);
  }
}
