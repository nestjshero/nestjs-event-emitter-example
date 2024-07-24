import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class EventPublisherService {
  constructor(private eventEmitter: EventEmitter2) {}

  publishEvent(data: string) {
    this.eventEmitter.emit('my.event', data);
  }
}