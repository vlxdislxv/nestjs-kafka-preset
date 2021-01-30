import { DynamicModule, FactoryProvider, Global, Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';

@Global()
@Module({})
export class ProvidersModule {
  public static register(providers: FactoryProvider[]): DynamicModule {
    return {
      module: ProvidersModule,
      providers: [ProvidersService, ...providers],
      exports: [...providers],
    };
  }
}
