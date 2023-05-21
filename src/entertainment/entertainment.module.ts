import { Module } from '@nestjs/common';
import { EntertainmentController } from './entertainment.controller';
import { EntertainmentService } from './entertainment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entertainmentArticles } from 'src/typeorm/entertainmentArticles';
import { entertainmentClubs } from 'src/typeorm/entities/entertainmentClubs';

@Module({
  imports:[TypeOrmModule.forFeature([entertainmentArticles, entertainmentClubs])],
  controllers : [EntertainmentController],
  providers : [EntertainmentService],
}) 
export class EntertainmentModule{}