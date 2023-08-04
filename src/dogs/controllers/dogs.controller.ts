import { Controller, Get } from '@nestjs/common';
import { DogsService } from '../services/dogs.service';

@Controller('dogs')
export class DogsController {
    constructor(private dotsService: DogsService) {}

    @Get()
    getDescription() {
        return this.dotsService.getDescription();
    }

    @Get('size')
    getSize() {
        return this.dotsService.getSize();
    }

    @Get('random')
    getRandom() {
        return this.dotsService.getRandom();
    }
}
