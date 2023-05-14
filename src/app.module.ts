import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntertainmentModule } from './entertainment/entertainment.module';
import { entertainmentArticles } from './typeorm/entertainmentArticles';

@Module({
  imports: [EntertainmentModule,
  TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'c_hub_api_v1',
    entities:[entertainmentArticles],
    synchronize:true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
