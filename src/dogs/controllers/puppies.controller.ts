import { Controller, Get } from "@nestjs/common";

@Controller('puppies')
export class PuppiesController {
    @Get()
    getDescription() {
        return 'I am a puppy'
    }

    @Get('size')
    getSize() {
        return 'I am tiny';
    }

    @Get('random')
    getRandom() {
        return 'I do not know how Rspack works under the hood';
    }

    @Get('hi')
    getHi() {
        return 'Hi puppy!!!!!';
    }
}
