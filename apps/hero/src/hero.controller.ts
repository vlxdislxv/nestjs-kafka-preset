import { Controller, Get } from '@nestjs/common';
import { HeroService } from './hero.service';

@Controller()
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  getHello(): string {
    return this.heroService.getHello();
  }
}
