import { Get, Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Observable } from 'rxjs';


import { CreateAuthorDto } from '../../../share/create-author.dto';
import { AuthGuard } from '@nestjs/passport';

// @UseGuards(AuthGuard('jwt'))
//guard author
@Controller('/api/author')
export class AuthorController {
  public constructor(
    private readonly authorService: AuthorService,
  ) { }

  @Post()
  public create(@Body() dto: CreateAuthorDto): Observable<any> {
    console.log(dto);
    return this.authorService.create(dto);
  }

  @Get()
  public findAll(): Observable<CreateAuthorDto[]> {
    return this.authorService.findAll();
  }
}
