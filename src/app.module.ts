import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import * as GraphQLJSON from 'graphql-type-json';
import { EventModule } from './event/event.module';
import { CustomerModule } from './customer/customer.module';
import { StatisticalModule } from './statistical/statistical.module';
import { OrganizationModule } from './organization/organization.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'huydeptrai',
    database: 'test',
    entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    synchronize: true,
  }),
  
    EventModule,
    CustomerModule,
    StatisticalModule,
    OrganizationModule,
    GraphQLModule.forRoot({
    debug: false,
    playground: false,
    typePaths: ['./**/*.graphql'],
    // resolvers: { JSON: GraphQLJSON },
    installSubscriptionHandlers: true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
