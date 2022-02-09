import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { AppConfig } from '../configuration/configuration.service';

@Injectable()
export class TypeOrmDefaultConfigService implements TypeOrmOptionsFactory {
  constructor(protected readonly config: AppConfig) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      synchronize: false,
      autoLoadEntities: true,
      logging: false,
      ...this.config.values.database,
    };
  }
}
