import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { HeroService } from './hero.service';

@Controller()
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @MessagePattern('hero.get')
  get() {
    return this.heroService.get();
  }
}
