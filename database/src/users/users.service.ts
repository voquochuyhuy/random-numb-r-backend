import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from '../../../share/create-user.dto';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) { }

  async create(dto: CreateUserDto): Promise<User> {
    const user = new User();
    user.id = dto.id;
    user.username = dto.username;
    user.password = dto.password;
    user.email = dto.email;

    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    
    
    return await this.usersRepository.find();
    // return [{
    //   username:"huy",
    //   id: "1",
    //   password : "21312",
    //   email :"34"
    // }];
  }
  async findOne (_name:string):Promise<User>{
    console.log(_name);
    return await this.usersRepository.findOne({username:_name});
  }
}