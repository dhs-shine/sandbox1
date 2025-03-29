import { InjectionToken } from '@nestjs/common';

export interface AppUseCase {
  getHello(): string;
}

export const AppUseCase = Symbol('AppUseCase') as InjectionToken;
