import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { MicroserviceOptions } from '@nestjs/common/interfaces/microservices/microservice-configuration.interface';
import { Transport } from '@nestjs/common/enums/transport.enum';

export const OPTIONS: NestMicroserviceOptions & MicroserviceOptions = {
  transport: Transport.RMQ,
  options: {
    urls: [`amqp://localhost:5672`],
    queue : "user_service",
    
    queueOptions :{durable : true}
  },
};