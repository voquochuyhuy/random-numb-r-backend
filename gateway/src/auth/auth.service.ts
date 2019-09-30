import { Injectable, Request, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  Client,
  Transport,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { LoginDto } from '../../../share/login.dto';
import {commandFactory} from "hystrixjs";
var hystrixConfig = require('hystrixjs').hystrixConfig;
hystrixConfig.init({
    "hystrix.circuit.volumeThreshold.forceOverride": true,
    "hystrix.circuit.volumeThreshold.override": 0
});

@Injectable()
export class AuthService  {
  @Client({ transport: Transport.MQTT, options: { port: 1883, host: 'localhost', protocol: 'mqtt' } })
  private client: ClientProxy;
  private CommandsFactory = require('hystrixjs').commandFactory;
  private payload;
  private externalService = {
    errorThreshold: 50,
    timeout: 5000,
    makeRequest:()=> this.client.send({ cmd: "login" }, this.payload).toPromise(),
    concurrency: 1000,
    sleep : 3000
  };;
  async onModuleInit() {
    this.client.connect();
     
  }
  
  private serviceCommand = commandFactory.getOrCreate("Authen Service on port :")
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

  async login(data: LoginDto) {
    // this.payload = data;
    // return this.serviceCommand.execute(this.externalService,()=>{
    //   console.log("Server");
      
    // }); \
    return this.client.send({ cmd: "login" }, data);
  }

}
