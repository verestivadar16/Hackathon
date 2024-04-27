import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { signInDTO } from 'src/common/dto/signIn.dto';
import { Public } from 'src/common/decorators/isPublic.decorator';
import { UserRoleGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/enums/role.enum';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() signInDto: signInDTO) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @UseGuards(AuthGuard, UserRoleGuard) // Use the UserRoleGuard for profile endpoint
  @Get('profile')
  @Roles(Role.Admin, Role.User) // Set the required role for the profile endpoint
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard)
  @Post('logout')
  logout(@Request() req) {
    return { message: 'Logged out successfully' };
  }
}
