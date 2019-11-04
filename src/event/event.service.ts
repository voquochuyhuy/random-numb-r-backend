import { Injectable } from '@nestjs/common';
import { Event } from '../graphql.schema';
import {EventEntity} from "./event.entity";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {CreateEventDto} from './dto/create-event.dto';
@Injectable()
export class EventService {

  constructor(
    @InjectRepository(EventEntity) private readonly eventRepository: Repository<EventEntity>,
  ) { }

  private readonly events: Event[] = [{ id: "1", eventName: '8/3', place: "Gigamall" , time : new Date(2014,1,1,10,56,1)},
  { id: "2", eventName: '9/3', place: "Gigamall" , time : new Date(2014,1,1,14,56,1) }];

  create(event: CreateEventDto){
    this.eventRepository.save(event);
    // return event;
  }

  findAll():  Promise<EventEntity[]> {
    return this.eventRepository.find();
  }

  async findOneById(_id: string): Promise<EventEntity> {
    return await this.eventRepository.findOne({id:_id});
  }
}