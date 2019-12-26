import { Min } from 'class-validator';
import { CreateStatisticalInput,UpdateStatisticalInput } from '../../graphql.schema';

export class CreateStatisticalDto extends CreateStatisticalInput {
    eventName: string;  
    cost: number;
    numberOfParticipants: number;
    revenue: number;
    note: string;
}

export class UpdateStatisticalDto extends UpdateStatisticalInput {
    id:number;
    eventName: string;  
    cost: number;
    numberOfParticipants: number;
    revenue: number;
    note: string;
}