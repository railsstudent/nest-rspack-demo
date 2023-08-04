import { Controller, Get } from '@nestjs/common';
import { KittensService } from '../services/kittens.service';

@Controller('kittens')
export class KittenController {
  constructor(private kittenService: KittensService) {}

  @Get('description')
  getDescription() {
    return this.kittenService.getDescription();
  }

  @Get('size')
  getSize() {
    return this.kittenService.getSize();
  }

  @Get('info')
  getInfo() {
    return this.kittenService.getInfo();
  }

  @Get('color')
  getColor() {
    return this.kittenService.getInfo().color;
  }
}
