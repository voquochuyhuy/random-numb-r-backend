import { Module } from '@nestjs/common';
import { StatisticalResolvers } from './statistical.resolvers';
import { StatisticalService } from './statistical.service';
import {DateScalar} from "../common/date.scalar";
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatisticalEntity } from './statistical.entity';
import {JwtStrategy} from '../auth/jwt.strategy';
@Module({
  imports :[TypeOrmModule.forFeature([StatisticalEntity])],
  providers: [StatisticalService, StatisticalResolvers,DateScalar,JwtStrategy],
  
})
export class StatisticalModule {}