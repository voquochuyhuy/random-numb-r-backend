import { Min } from 'class-validator';
import { CreateEventInput } from '../../graphql.schema';

export class CreateEventDto extends CreateEventInput {
  
  eventName: string;
  organizationName:string;
  place :string;
  startTime : Date
  endTime: Date;
}