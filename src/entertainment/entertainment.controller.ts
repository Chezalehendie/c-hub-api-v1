import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { CreateArticleDto} from 'src/typeorm/dtos/CreateArticle.dto';
import { EntertainmentService } from './entertainment.service';

@Controller('entertainment')
export class EntertainmentController{
constructor(private entertainmentService: EntertainmentService){}

   @Post()
    addArticle(
        @Body()CreateArticleDto: CreateArticleDto
        ){
   this.entertainmentService.insertArticle(CreateArticleDto);
    }
}