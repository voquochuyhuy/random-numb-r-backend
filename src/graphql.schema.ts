
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateCustomerInput {
    name?: string;
    phone?: number;
    birthday?: Date;
    adress?: string;
    eventname?: string;
    checkinTime?: Date;
    code?: string;
}

export class CreateEventInput {
    eventName?: string;
    place?: string;
    time?: Date;
}

export class CreateOrganizationInput {
    name?: string;
    place?: string;
}

export class CreateStatisticalInput {
    eventName?: string;
    cost?: number;
    numberOfParticipants?: number;
    revenue?: number;
    note?: Date;
}

export class Customer {
    id?: string;
    name?: string;
    phone?: number;
    birthday?: Date;
    adress?: string;
    eventname?: string;
    checkinTime?: Date;
    code?: string;
}

export class Event {
    id?: string;
    eventName?: string;
    place?: string;
    time?: Date;
}

export abstract class IMutation {
    abstract createCustomer(createCustomerInput?: CreateCustomerInput): Customer | Promise<Customer>;

    abstract createEvent(createEventInput?: CreateEventInput): Event | Promise<Event>;

    abstract createOrganization(createOrganizationInput?: CreateOrganizationInput): Organization | Promise<Organization>;

    abstract createStatistical(createStatisticalInput?: CreateStatisticalInput): Statistical | Promise<Statistical>;
}

export class Organization {
    id?: number;
    organizationName?: string;
    place?: string;
}

export abstract class IQuery {
    abstract getCustomers(): Customer[] | Promise<Customer[]>;

    abstract customer(id: string): Customer | Promise<Customer>;

    abstract getEvents(): Event[] | Promise<Event[]>;

    abstract event(id: string): Event | Promise<Event>;

    abstract getOrganizations(): Organization[] | Promise<Organization[]>;

    abstract organization(id: string): Organization | Promise<Organization>;

    abstract getStatisticals(): Statistical[] | Promise<Statistical[]>;

    abstract statistical(id: string): Statistical | Promise<Statistical>;
}

export class Statistical {
    id?: number;
    eventName?: string;
    cost?: number;
    numberOfParticipants?: number;
    revenue?: number;
    note?: Date;
}

export abstract class ISubscription {
    abstract customerCreated(): Customer | Promise<Customer>;

    abstract eventCreated(): Event | Promise<Event>;

    abstract organizationCreated(): Organization | Promise<Organization>;

    abstract StatisticalCreated(): Statistical | Promise<Statistical>;
}
