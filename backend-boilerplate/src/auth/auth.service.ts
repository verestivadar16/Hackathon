import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/Database/Users/user.services';

import * as CryptoJS from 'crypto-js';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.userByEmail(email);
    if (!user || !this.comparePasswords(pass, user.passwordHash)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  private comparePasswords(
    inputPassword: string,
    hashedPassword: string,
  ): boolean {
    const inputHashedPassword = CryptoJS.SHA256(inputPassword).toString();

    // Compare the hashed input password with the hashed password from the database
    return inputHashedPassword === hashedPassword;
  }
}
