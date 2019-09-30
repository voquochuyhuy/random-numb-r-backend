import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import {JwtStrategy} from '../auth/jwt.strategy'
@Module({
  imports: [],
  controllers: [AuthorController],
  providers: [AuthorService, JwtStrategy],
})
export class AuthorModule { }