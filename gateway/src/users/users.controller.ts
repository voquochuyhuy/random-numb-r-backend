import { Get, Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';

import { UserDto } from '../../../share/user.dto';
import { CreateUserDto } from '../../../share/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guard/roles.guard';
import { Roles } from '../common/decorator/roles.decorator';

// @UseGuards(AuthGuard('jwt'))

//guard author
@Controller('/api/users')
export class UsersController {
  public constructor(
    private readonly usersService: UsersService,
  ) { }

  // @UseGuards(RolesGuard)
  @Roles('admin')
  @Post()
  public create(@Body() dto: CreateUserDto): Observable<any> {
    console.log(dto);
    return this.usersService.create(dto);
  }
  // @UseGuards(RolesGuard)
  @Roles('user')
  @Get()
  public findAll(): Observable<UserDto[]> {
    return this.usersService.findAll();
  }
}
