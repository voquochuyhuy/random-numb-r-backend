import { Injectable } from '@nestjs/common';
import { Event } from '../graphql.schema';
import {EventEntity} from "./event.entity";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {CreateEventDto,UpdateEventDto} from './dto/create-event.dto';
@Injectable()
export class EventService {

  constructor(
    @InjectRepository(EventEntity) private readonly eventRepository: Repository<EventEntity>,
  ) { }

  

  create(event: CreateEventDto){
    this.eventRepository.save(event);
    // return event;
  }

  update(event: UpdateEventDto){
    this.eventRepository.update(event.id,event)
  }

  delete(eventid){
    this.eventRepository.delete(eventid);
  }

  findAll():  Promise<EventEntity[]> {
    return this.eventRepository.find();
  }



  async findOneById(_id: number): Promise<EventEntity> {
    return await this.eventRepository.findOne({id:_id});
  }
}