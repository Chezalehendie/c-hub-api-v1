import { Module } from '@nestjs/common';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { businessItems } from 'src/typeorm/entities/businessItems';

@Module({
    imports:[TypeOrmModule.forFeature([businessItems])],
    controllers : [BusinessController],
    providers : [BusinessService],
  })
  export class BusinessModule{}