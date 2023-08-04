import { Module } from '@nestjs/common';
import { CatController } from './controllers/cats.controller';
import { KittenController } from './controllers/kitten.controller';
import { CatsService } from './services/cats.service';
import { KittensService } from './services/kittens.service';

@Module({
  controllers: [CatController, KittenController],
  providers: [KittensService, CatsService],
})
export class CatsModule {}
