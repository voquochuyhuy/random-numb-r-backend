import { Min } from 'class-validator';
import { CreateEventInput } from '../../graphql.schema';

export class CreateEventDto extends CreateEventInput {
  @Min(1)
  eventName: string;
  place :string;
  time: Date
}