import { Injectable } from '@nestjs/common';
import { AppUseCase } from '../port/in/app.use-case';

@Injectable()
export class AppService implements AppUseCase {
  getHello(): string {
    return 'Hello World!';
  }
}
