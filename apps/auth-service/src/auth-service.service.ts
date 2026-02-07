import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { KAFKA_SERVICE } from '@app/kafka';
import { KAFKA_TOPICS } from '@app/kafka';

@Injectable()
export class AuthServiceService implements OnModuleInit {
  constructor(@Inject(KAFKA_SERVICE) private readonly kafkaClient: ClientKafka) {}

  onModuleInit() {
    //connect to kafka when the module initializes
    this.kafkaClient.connect();
  }

  getHello(): string {
    return `Hello world!`
  }

  async simulateUserRegistration(email: string) {
    //simulate user registration
    await this.kafkaClient.emit(KAFKA_TOPICS.USER_REGISTERED, {
      email,
      timestamp: new Date().toISOString(),
    });

  return {message: `User registered at ${email}`}
  }
}
