import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class EventListenerService {
  @OnEvent('my.event')
  handleEvent(data: string) {
    console.log('Event received:', data);
  }
}