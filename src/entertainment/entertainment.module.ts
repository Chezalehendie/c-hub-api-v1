import { Module } from '@nestjs/common';
import { EntertainmentController } from './entertainment.controller';
import { EntertainmentService } from './entertainment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entertainmentArticles } from 'src/typeorm/entertainmentArticles';

@Module({
  imports:[TypeOrmModule.forFeature([entertainmentArticles])],
  controllers : [EntertainmentController],
  providers : [EntertainmentService],
})
export class EntertainmentModule{}