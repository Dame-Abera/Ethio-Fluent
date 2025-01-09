// src/user/user.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async registerUser(@Body() body: { email: string; firstName?: string; lastName?: string; hash: string }) {
    return this.userService.createUser({
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      hash: body.hash,
    });
  }
}
