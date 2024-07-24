import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { EventPublisherService } from './event-publisher.service';
import { EventListenerService } from './event-listener.service';

@Module({
  imports: [EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [EventPublisherService, EventListenerService],
})
export class AppModule {}