import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Neighbours, Prisma } from '@prisma/client';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { NeighboursService } from './neighbours.service';
import { Public } from 'src/common/decorators/isPublic.decorator';

@ApiTags('neighbours')
@Controller({ version: '1', path: 'neighbour' })
export class NeighboursController {
  constructor(private readonly neighboursService: NeighboursService) {}

  @Public()
  @Get()
  // http://localhost:3000/neighbour
  @ApiOperation({ summary: 'Select all neighbours' })
  public async getAllNeighbours(): Promise<Neighbours[]> {
    try {
      return this.neighboursService.getAllNeighbours();
    } catch (error) {
      // Return an informative error response to the client
      throw new HttpException(
        'Failed to get neighbours. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Public()
  @Get(':id')
  //  http://localhost:3000/neighbour/2
  async getNeighbourById(@Param('id') id: string): Promise<Neighbours> {
    return this.neighboursService.neighbourById(id);
  }

  @Public()
  @Post('/create')
  /*{
    "roomName": "Szemetes",
    "neighbour": "true", // Note the value is a string, not a boolean
    "roomId": "2"
} */
  async createDevice(
    @Body() data: Prisma.NeighboursCreateInput,
  ): Promise<Neighbours> {
    return this.neighboursService.createNeighbour(data);
  }

  @Public()
  @Post('/update')
  /**{
  "where": {
    "id": "deb8258a-d07c-4b9f-96f5-4698c71d8c92"
  },
  "data": {
    "roomName": "Szemetes2",
    "neighbour": "true", // Note the value is a string, not a boolean
    "roomId": "2"

  }
} */
  async updateNeighbour(
    @Body()
    body: {
      where: Prisma.NeighboursWhereUniqueInput;
      data: Prisma.NeighboursUpdateInput;
    },
  ): Promise<Neighbours> {
    return this.neighboursService.updateNeighbour(body.where, body.data);
  }

  @Public()
  @Post('/delete')
  //  http://localhost:3000/delete
  async deleteNeighbour(
    @Body()
    where: Prisma.NeighboursWhereUniqueInput,
  ): Promise<Neighbours> {
    return this.neighboursService.deleteNeighbour(where);
  }
}
