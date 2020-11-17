import { Controller, Post, Req } from '@nestjs/common';
import { NestCookieRequest } from 'nest-cookies';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Req() req: NestCookieRequest): string {
    req._cookies = [
      {
        name: 'hello',
        value: 'world',
      },
    ];

    return this.appService.getHello();
  }
}
