import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
    getDescription() {
        return 'I am a dog';
    }

    getSize() {
        return 'I am large';
    }

    getRandom() {
        return 'rspack build --watch compiles files and output to dist';
    }
}
