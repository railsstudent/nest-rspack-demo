import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHelloName('World');
  }

  @Get('good-morning')
  getGoodMorning(): string {
    return this.appService.getGoodMorning();
  }

  @Get('good-afternoon')
  getGoodAfternoon() {
    return this.appService.getGoodAfternoon();
  }

  @Get(':name')
  getHelloName(@Param('name') name: string): string {
    return this.appService.getHelloName(name);
  }
}
