import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntertainmentModule } from './entertainment/entertainment.module';

@Module({
  imports: [EntertainmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
