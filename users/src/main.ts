import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {OPTIONS} from "./main.options"
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,OPTIONS);
  await app.listen(()=>console.log('Users Microservice is listening')
  );
}
bootstrap();
