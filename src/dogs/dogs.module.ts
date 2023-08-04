import { Module } from '@nestjs/common';
import { DogsController } from './controllers/dogs.controller';
import { DogsService } from './services/dogs.service';
import { PuppiesController } from './controllers/puppies.controller';

@Module({
  controllers: [DogsController, PuppiesController],
  providers: [DogsService]
})
export class DogsModule {}
