import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';

import { NotificationsModule } from './modules/notifications/notifications.module';
import { DatabaseModule } from './modules/database/database.module';
import { TypeOrmDefaultConfigService } from './modules/database/database.providers';
import configuration from './modules/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [DatabaseModule],
      useExisting: TypeOrmDefaultConfigService,
    }),
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      ignoreEnvVars: false,
      isGlobal: true,
      expandVariables: true,
      load: [configuration],
    }),
    NotificationsModule,
    TerminusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
