import { Controller, Get } from '@nestjs/common';
import { CatsService } from '../services/cats.service';

@Controller('cats')
export class CatController {
  constructor(private catService: CatsService) {}

  @Get('description')
  getDescription() {
    return this.catService.getDescription();
  }

  @Get('size')
  getSize() {
    return this.catService.getSize();
  }

  @Get('info')
  getInfo() {
    return this.catService.getInfo();
  }
}
