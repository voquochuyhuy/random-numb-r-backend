import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, ClientProxy, Transport, Client } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @MessagePattern({cmd:'login' })
  async create(data) { 
    return this.appService.login(data);
  }
}
