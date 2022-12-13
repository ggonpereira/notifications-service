import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotificationDTO } from './dto/create-notification.dto';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllNotifications() {
    return await this.prisma.notification.findMany();
  }

  async createNotification(dto: CreateNotificationDTO) {
    return await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        ...dto,
      },
    });
  }
}
