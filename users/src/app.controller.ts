import { Controller } from '@nestjs/common';
import { MessagePattern, ClientProxy, Transport, Client,EventPattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { UserDto } from '../../share/user.dto';
import { CreateUserDto } from '../../share/create-user.dto';

@Controller()
export class AppController {
  @Client({ transport: Transport.MQTT, options: { port: 1883,host:"localhost",protocol:'mqtt' } })
  private db: ClientProxy;

  @MessagePattern({cmd:'create' })
  public create(dto: CreateUserDto): Observable<any> {
    console.log("vao user service");
    
    return this.db.send({ cmd: 'createUser' }, dto);
  }

  @MessagePattern({ cmd: 'findAll' })
  public findAll(data: string): Observable<UserDto[]> {
    console.log("user service nhan message tu gateway");
    
    return this.db.send({ cmd: 'findAllUser' }, data);
  }
}
