import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @MessagePattern({ cmd: 'getUserPermission' })
  async findOne( data :any) {
  
    return await this.appService.findOne(data.username);
  }

  @MessagePattern({ cmd: 'createAuthor' })
  async create( data :any) {
  
    return await this.appService.create(data);
  }

  @MessagePattern({ cmd: 'findAllAuthor' })
  async findAll( ) {
  
    return await this.appService.findAll();
  }

}
