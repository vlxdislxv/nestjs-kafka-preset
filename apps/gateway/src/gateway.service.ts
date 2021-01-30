import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class GatewayService {
  constructor(
    @Inject('HeroProvider')
    private readonly heroClient: ClientKafka,
  ) {}

  get() {
    return this.heroClient.send('hero.get', {});
  }
}
