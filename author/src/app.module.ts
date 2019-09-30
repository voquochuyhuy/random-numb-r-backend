import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Policies } from './policies.entity';
@Module({
  imports: [ 
    TypeOrmModule.forFeature([Policies]),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'huydeptrai',
    database: 'testAuthor',
    entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    synchronize: true,
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

