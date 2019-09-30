import { Get, Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { LoginDto } from '../../../share/login.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller('api')
export class AuthController {
  public constructor(
    private readonly authService: AuthService,
  ) { }

  // @UseGuards(AuthGuard('local'))
  // @Post('login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  
}
