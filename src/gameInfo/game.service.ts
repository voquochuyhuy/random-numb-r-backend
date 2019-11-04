// import { Injectable } from '@nestjs/common';
// import { Event } from '../graphql.schema';

// @Injectable()
// export class EventService {
//   private readonly events: Event[] = [{ id: 1, name: '8/3', place: "Gigamall" , time : 123453456},
//   { id: 2, name: '9/3', place: "Gigamall" , time : 1231341645 }];

//   create(event: Event): Event {
//     this.events.push(event);
//     return event;
//   }

//   findAll(): Event[] {
//     return this.events;
//   }

//   findOneById(id: number): Event {
//     return this.events.find(event => event.id === id);
//   }
// }