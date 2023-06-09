import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntertainmentModule } from './entertainment/entertainment.module';
import { entertainmentArticles } from './typeorm/entertainmentArticles';
import { entertainmentClubs } from './typeorm/entities/entertainmentClubs';
import { BusinessModule } from './business/business.module';
import { businessItems } from './typeorm/entities/businessItems';
import { HealthModule } from './health/health.module';
import { health } from './typeorm/entities/health';
import { staff } from './typeorm/entities/staff';

@Module({
  imports: [EntertainmentModule, BusinessModule,HealthModule,
  TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'c_hub_api_v1',
    entities:[entertainmentArticles,entertainmentClubs,businessItems,health,staff],
    synchronize:false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
