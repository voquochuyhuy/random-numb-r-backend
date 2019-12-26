import { Min } from 'class-validator';
import { CreateOrganizationInput,UpdateOrganizationInput } from '../../graphql.schema';

export class CreateOrganizationDto extends CreateOrganizationInput {
  
  organizationName : string;
  place : string;
  hotline :string;
}

export class UpdateOrganizationDto extends UpdateOrganizationInput {
  id : number;
  organizationName : string;
  place : string;
  hotline :string;
}