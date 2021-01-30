import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroService {
  get() {
    return [
      { id: 1, name: 'hero1' },
      { id: 2, name: 'hero2' },
    ];
  }
}
