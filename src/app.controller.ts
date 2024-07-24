import { Controller, Get } from '@nestjs/common';
import { EventPublisherService } from './event-publisher.service';

@Controller()
export class AppController {
  constructor(private eventPublisher: EventPublisherService) {}

  @Get('publish')
  publishEvent() {
    this.eventPublisher.publishEvent('Hello, EventEmitter!');
    return 'Event published';
  }
}