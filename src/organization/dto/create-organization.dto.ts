import { Min } from 'class-validator';
import { CreateOrganizationInput } from '../../graphql.schema';

export class CreateOrganizationDto extends CreateOrganizationInput {
  
  organizationName : string;
  place : string;

}