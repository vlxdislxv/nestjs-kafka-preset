import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroService {
  getHello(): string {
    return 'Hello World!';
  }
}
