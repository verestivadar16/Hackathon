/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

/**
 * Data Transfer Object (DTO) for retrieving information about a specific node.
 */
export class signInDTO {
  /**
   * User email.
   * @example 'myEmail@gmail.com'
   */
  @ApiProperty({ description: 'User email' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  /**
   * User password.
   * @example mypass123
   */
  @ApiProperty({ description: 'User password' })
  password: string;
}
