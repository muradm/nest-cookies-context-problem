import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { CookieModule } from 'nest-cookies';
import { AppController } from './app.controller';
import { AppCookieInterceptor } from './app.interceptor';
import { AppService } from './app.service';

@Module({
  imports: [
    CookieModule,
    GraphQLModule.forRoot({
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AppCookieInterceptor,
    },
  ],
})
export class AppModule {}
