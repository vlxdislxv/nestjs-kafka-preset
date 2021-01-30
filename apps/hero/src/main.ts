import { NestFactory } from '@nestjs/core';
import { HeroModule } from './hero.module';

async function bootstrap() {
  const app = await NestFactory.create(HeroModule);
  await app.listen(3000);
}
bootstrap();
