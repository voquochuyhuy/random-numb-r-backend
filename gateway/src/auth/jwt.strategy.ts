import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../../../auth/src/constants';
import {
  ClientProxy,
  Client,
  Transport,
} from '@nestjs/microservices';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }
  @Client({ transport: Transport.MQTT, options: { port: 1883, host: 'localhost', protocol: 'mqtt' } })
  private client: ClientProxy;
  async validate(payload: any) {
    console.log("validate jwt");
    
    // const user = { id: payload.sub, name: payload.username }
    // return user;
    const permission = await this.client.send({cmd:"getUserPermission"},payload).toPromise();
    console.log(payload);
    
    console.log(permission);
    
    // return new Promise((resolve, reject) => {
    //   permission.subscribe(permission => {
        
    //     const { username, ...result } = permission;
          
    //       resolve(result);
      
    //   },
    //     error => {
    //       throw new UnauthorizedException();
    //     })
    // })
    return permission.role
  }
}