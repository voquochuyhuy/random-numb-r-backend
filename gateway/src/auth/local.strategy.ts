import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ClientProxy,
  Client,
  Transport,
} from '@nestjs/microservices';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }
  @Client({ transport: Transport.MQTT, options: { port: 1883, host: 'localhost', protocol: 'mqtt' } })
  private client: ClientProxy;

  async validate(username: string, password: string): Promise<any> {
    console.log('chay vao local strategy');

    const data = { username, password };
    const userObs = await this.client.send({ cmd: "getUserInfo" }, data);
  
    console.log("local strategy");
    
    return new Promise((resolve, reject) => {
      userObs.subscribe(user => {
        if (user && user.password === password) {
          const { password, ...result } = user;
          
          resolve(result);
        }
        else {
          console.log("mat khau sai hoac ko tim thay user");
          
          reject ({
            message:"not Found"
          })
        }
         
      },
        error => {
          throw new UnauthorizedException();
        })
    })

  }
}