import { Module, DynamicModule } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaService } from './kafka.service';
import {
  KAFKA_BROKER,
  KAFKA_CLIENT_ID,
  KAFKA_COMSUMER_GROUP,
} from './constants/kafka.constants';

export const KAFKA_SERVICE = 'KAFKA_SERVICE';

@Module({})
export class KafkaModule {
  static register(consumerGroup?: string): DynamicModule {
    return {
      module: KafkaModule,
      imports: [
        ClientsModule.register([
          {
            name: KAFKA_SERVICE,
            transport: Transport.KAFKA,
            options: {
              client: {
                brokers: [KAFKA_BROKER],
                clientId: KAFKA_CLIENT_ID,
              },
              consumer: {
                groupId: consumerGroup || KAFKA_COMSUMER_GROUP,
              },
            },
          },
        ]),
      ],
      providers: [KafkaService],
      exports: [ClientsModule, KafkaService],
    };
  }
}
