import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateNotificationDTO } from './dto/create-notification.dto';

@Controller('/notifications')
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getAllNotifications() {
    return this.appService.getAllNotifications();
  }

  @Post()
  async createNotification(@Body() dto: CreateNotificationDTO) {
    return this.appService.createNotification(dto);
  }
}
