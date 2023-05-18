import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateArticleDto} from 'src/typeorm/dtos/CreateArticle.dto';
import { CreateClubsDto} from 'src/typeorm/dtos/CreateClubs.dto';
import { updateArticleDto} from 'src/typeorm/dtos/updateArticle.dto';
import { updateClubsDto} from 'src/typeorm/dtos/updateClubs.dto';
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
    async getSingleArticleById(
        @Param('id', ParseIntPipe) id:number,
    ){
        const articles = await this.entertainmentService.getSingleArticle(id);
        return articles;
        }

    @Patch(':id')
    async updateArticleById(
        @Param('id', ParseIntPipe) id:number,
        @Body() updateArticleDto: updateArticleDto,
    ){
     const articles = await this.entertainmentService.updateArticle(id, updateArticleDto);
     return articles;
    }
    
    @Delete(':id')
    async deleteArticleById(
        @Param('id', ParseIntPipe) id:number,
    ){
     await this.entertainmentService.deleteArticle(id);
     console.log('DELETED SUCCESSFULLY')
    }

    @Post('clubs')
    addClub(
        @Body()CreateClubsDto: CreateClubsDto
        ){
   return this.entertainmentService.insertClub(CreateClubsDto);
    }

    @Get('clubs')
    async getClubs(){
    const clubs = await this.entertainmentService.getAllClubs();
    return clubs;
    }

    @Get(':id')
    async getSingleClubById(
        @Param('id', ParseIntPipe) id:number,
    ){
        const club = await this.entertainmentService.getSingleClub(id);
        return club;
        }

        @Patch(':id')
    async updateClubsById(
        @Param('id', ParseIntPipe) id:number,
        @Body() updateClubsDto: updateClubsDto,
    ){
     const club = await this.entertainmentService.updateClub(id, updateClubsDto);
     return club;
    }

    @Delete(':id')
    async deleteClubById(
        @Param('id', ParseIntPipe) id:number,
    ){
     await this.entertainmentService.deleteClub(id);
     console.log('DELETED SUCCESSFULLY')
    }

}