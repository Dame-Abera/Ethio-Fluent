// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: { email: string; firstName?: string; lastName?: string; hash: string }) {
    return this.prisma.user.create({
      data,
    });
  }
}
