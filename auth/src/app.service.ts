import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AppService {
  constructor(
    
    private readonly jwtService: JwtService,
  ) {}

 
  async login(user: any) {
    console.log("auth service");
    console.log(user)
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
