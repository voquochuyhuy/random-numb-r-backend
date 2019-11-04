
import { CreateCustomerInput } from '../../graphql.schema';
export class CreateCustomerDto extends CreateCustomerInput {
  
  readonly  name :string;
  readonly  phone :number;
  readonly  birthday :Date
  readonly  adress : string;
  readonly  eventname : string;
  readonly  checkinTime :Date
  readonly  code : string;
  
}