import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  Client,
  Transport,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';


import { CreateAuthorDto } from '../../../share/create-author.dto';

@Injectable()
export class AuthorService {
  @Client({ transport: Transport.MQTT, options: { port: 1883,host:'localhost',protocol:'mqtt' } })
  private client: ClientProxy;

  public create(dto: CreateAuthorDto): Observable<any> {
      return this.client.send({ cmd: 'createAuthor' }, dto);
 
  }

  public findAll(): Observable<CreateAuthorDto[]> {
    return this.client.send({ cmd: 'findAllAuthor' }, '');
  }
}
