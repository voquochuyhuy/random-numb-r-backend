import { Min } from 'class-validator';
import { CreateEventInput,UpdateEventInput } from '../../graphql.schema';

export class CreateEventDto extends CreateEventInput {
  
  eventName: string;
  organizationName:string;
  place :string;
  startTime : Date
  endTime: Date;
}

export class UpdateEventDto extends UpdateEventInput {
  id : number;
  eventName: string;
  organizationName:string;
  place :string;
  startTime : Date
  endTime: Date;
}