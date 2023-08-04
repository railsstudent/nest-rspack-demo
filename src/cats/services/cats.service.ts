import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getSize() {
    return 'I am large';
  }

  getDescription() {
    return 'I am a cat';
  }

  getInfo() {
    return { 
      description: this.getDescription(),
      size: this.getSize(),
      color: 'red',
      weight: 61
    };
  }
}
