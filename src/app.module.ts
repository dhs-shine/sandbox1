import { Module } from '@nestjs/common';
import { AppController } from './adapter/in/web/app.controller';
import { AppService } from './service/app.service';
import { AppUseCase } from './port/in/app.use-case';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: AppUseCase,
      useClass: AppService,
    },
  ],
})
export class AppModule {}
