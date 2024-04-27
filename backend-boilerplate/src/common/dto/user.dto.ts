/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../enums/role.enum';

/**
 * Data Transfer Object (DTO) for retrieving information about a specific node.
 */
export class userDTO {
  /**
   * User email.
   * @example 'myEmail@gmail.com'
   */
  @ApiProperty({ description: 'User email' })
  email: string;

  /**
   * User password.
   * @example mypass123
   */
  @ApiProperty({ description: 'User password' })
  password: string;

  /**
   * User role.
   * @example user
   */
  @ApiProperty({ description: 'User role' })
  role: Role;
}
