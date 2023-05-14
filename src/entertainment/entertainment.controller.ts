import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateArticleDto} from 'src/typeorm/dtos/CreateArticle.dto';
import { updateArticleDto} from 'src/typeorm/dtos/updateArticle.dto';
import { EntertainmentService } from './entertainment.service';

@Controller('entertainment')
export class EntertainmentController{
constructor(private entertainmentService: EntertainmentService){}

   @Post()
    addArticle(
        @Body()CreateArticleDto: CreateArticleDto
        ){
   return this.entertainmentService.insertArticle(CreateArticleDto);
    }

    @Get()
    async getArticles(){
    const articles = await this.entertainmentService.getAllArticles();
    return articles;
    }

    @Get(':id')
    async getSingleArticle(){
        const articles = await this.entertainmentService.getAllArticles();
        return articles;
        }

    @Patch(':id')
    async updateArticleById(
        @Param('id', ParseIntPipe) id:number,
        @Body() updateArticleDto: updateArticleDto,
    ){
     await this.entertainmentService.updateArticle(id, updateArticleDto);
    }
    @Delete(':id')
    async deleteArticleById(
        @Param('id', ParseIntPipe) id:number,
    ){
     await this.entertainmentService.deleteArticle(id);
    }
}