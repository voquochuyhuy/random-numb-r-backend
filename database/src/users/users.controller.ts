import { Controller,Param } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from '../../../share/create-user.dto';
import { UsersService } from './users.service';
import { UserDto} from '../../../share/user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @MessagePattern({ cmd: 'createUser' })
  async create(dto: CreateUserDto) {
    console.log("vao db user");
    
    return (await this.usersService.create(dto));
  }

  @MessagePattern({ cmd: 'findAllUser' })
  async findAll(): Promise<UserDto[]> {

    return await this.usersService.findAll();
  }

  @MessagePattern({ cmd: 'getUserInfo' })
  async findOne( data :any) {
  
    return await this.usersService.findOne(data.username);
  }
}