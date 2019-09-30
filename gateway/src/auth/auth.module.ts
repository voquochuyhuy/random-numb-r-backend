import { Module, OnModuleInit } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {LocalStrategy} from './local.strategy';
import {JwtStrategy} from './jwt.strategy'


@Module({
  imports: [
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports:[AuthService]
})
export class AuthModule { }