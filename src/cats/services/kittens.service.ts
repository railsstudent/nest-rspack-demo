import { Injectable } from '@nestjs/common';

@Injectable()
export class KittensService {
  getSize() {
    return 'I am tiny';
  }

  getDescription() {
    return 'I am a kitten';
  }

  getInfo() {
    return {
      description: this.getDescription(),
      size: 'tiny',
      color: 'golden brown',
      weight: 23,
      length: 15,
    }
  }
}
