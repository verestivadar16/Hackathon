import { ApiProperty } from '@nestjs/swagger';

export class createReservationDTO {
  @ApiProperty({ description: '' })
  roomId: string | undefined;
  @ApiProperty({ description: '' })
  userId: string;
  @ApiProperty({ description: '' })
  choosenDate: string | null | undefined | Date;
  @ApiProperty({ description: '' })
  description: string;
  @ApiProperty({ description: '' })
  deviceId: string;
  @ApiProperty({ description: '' })
  disturbingFactor: boolean;
  @ApiProperty({ description: '' })
  endTime: string;
  @ApiProperty({ description: '' })
  startTime: string;
  @ApiProperty({ description: '' })
  devicesId: string[]; // Array of device IDs
}
