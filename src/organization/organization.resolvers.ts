import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Organization } from '../graphql.schema';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import {OrganizationEntity} from "./organization.entity";
const pubSub = new PubSub();

@Resolver('Organization')
export class OrganizationResolvers {
  constructor(private readonly organizationService: OrganizationService) {}

  @Query()
  async getOrganizations() {
    return await this.organizationService.findAll();
  }

  @Query('organization')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: string,
  ): Promise<OrganizationEntity> {
    return await this.organizationService.findOneById(id);
  }

  @Mutation('createOrganization')
  async create(@Args('createOrganizationInput') args: CreateOrganizationDto){
    const organizationCreated = await this.organizationService.create(args);
    pubSub.publish('organizationCreated', { organizationCreated: organizationCreated });
    return organizationCreated;
  }

  @Subscription('organizationCreated')
  organizationCreated() {
    return pubSub.asyncIterator('organizationCreated');
  }
}