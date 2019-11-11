import { Module } from '@nestjs/common';
import { OrganizationResolvers } from './organization.resolvers';
import {OrganizationService } from './organization.service';
import {DateScalar} from "../common/date.scalar";
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationEntity } from './organization.entity';
import {JwtStrategy} from '../auth/jwt.strategy';
@Module({
  imports :[TypeOrmModule.forFeature([OrganizationEntity])],
  providers: [OrganizationService, OrganizationResolvers,DateScalar,JwtStrategy],
  
})
export class OrganizationModule {}