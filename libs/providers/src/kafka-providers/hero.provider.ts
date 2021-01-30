import { FactoryProvider } from '@nestjs/common';
import { ClientKafka, ClientProxyFactory, Transport } from '@nestjs/microservices';

export const HeroProvider: FactoryProvider = {
  provide: 'HeroProvider',
  useFactory() {
    const client = ClientProxyFactory.create({
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'hero',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'hero-consumer',
        },
      },
    }) as ClientKafka;

    client.subscribeToResponseOf('hero.get');

    return client;
  },
};
