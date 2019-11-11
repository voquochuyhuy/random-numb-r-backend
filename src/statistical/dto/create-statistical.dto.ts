import { Min } from 'class-validator';
import { CreateStatisticalInput } from '../../graphql.schema';

export class CreateStatisticalDto extends CreateStatisticalInput {
    eventName: string;  
    cost: number;
    numberOfParticipants: number;
    revenue: number;
    note: string;
}