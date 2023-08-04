import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGoodMorning(): string {
    return 'Good Morning!!!!!';
  }

  getHelloName(name: string): string {
    return `Hello ${name}!`;
  }

  getGoodAfternoon() {
    return {
      'en': 'Good Afternoon',
      'es': 'Buenas Tarde',
      'de': 'Guten Tag',
      'jp': 'こんにちは'
    }
  }
}
