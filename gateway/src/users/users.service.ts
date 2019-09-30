import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  Client,
  Transport,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { UserDto } from '../../../share/user.dto';
import { CreateUserDto } from '../../../share/create-user.dto';
import {commandFactory} from "hystrixjs";
@Injectable()
export class UsersService {
  // @Client({ transport: Transport.MQTT, options: { port: 1883,host:'localhost',protocol:'mqtt' } })
  @Client({ transport: Transport.RMQ, options: { urls: [`amqp://localhost:5672`],queue:"user_service",queueOptions:{durable:true},noAck:false } })
  private client: ClientProxy;
  private CommandsFactory = require('hystrixjs').commandFactory;
  private payload;
  private externalService = {
    errorThreshold: 50,
    timeout: 3000,
    makeRequest:()=>
      this.client.send({ cmd: 'findAll' }, '').toPromise(),
    concurrency: 1000,
    sleep : 60000
  };;
  async onModuleInit() {
    this.client.connect();
     
  }
  
  private serviceCommand = commandFactory.getOrCreate("User Service on port :")
    .circuitBreakerErrorThresholdPercentage(this.externalService.errorThreshold)
    .timeout(this.externalService.timeout)
    .run(this.externalService.makeRequest)
    .circuitBreakerRequestVolumeThreshold(this.externalService.concurrency)
    .circuitBreakerSleepWindowInMilliseconds(this.externalService.sleep)
    .statisticalWindowLength(10000)
    .statisticalWindowNumberOfBuckets(10)
    .errorHandler((error)=>{
      if(error.statusCode === 500 || error.statusCode === 503)
      {

        return error;
      }
      
      else return ()=>{console.log("loi user");
      };
    })

    .build();


  public create(dto: CreateUserDto): Observable<any> {
    console.log('gateway post user');

      return this.client.send({ cmd: 'create' }, dto);
 
  }

  public findAll(): Observable<UserDto[]> {
    // return this.serviceCommand.execute(this.externalService,()=>{
    //   console.log("Server");
    // });
    console.log("gate way call user service");
    
    return this.client.send({cmd:"findAll"},"");
    
  }
}
