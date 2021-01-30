import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { HeroModule } from './hero.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    HeroModule,
    {
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
    },
  );
  await app.listenAsync();
}
bootstrap();
