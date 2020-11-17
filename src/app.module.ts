import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { CookieModule } from 'nest-cookies';
import { AppController } from './app.controller';
import { AppCookieInterceptor } from './app.interceptor';
import { RootResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
  imports: [
    CookieModule,
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AppCookieInterceptor,
    },
    RootResolver,
  ],
})
export class AppModule {}
