import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateArticleDto} from 'src/typeorm/dtos/CreateArticle.dto';
import { CreateClubsDto} from 'src/typeorm/dtos/CreateClubs.dto';
import { updateArticleDto} from 'src/typeorm/dtos/updateArticle.dto';
import { updateClubsDto} from 'src/typeorm/dtos/updateClubs.dto';
import { EntertainmentService } from './entertainment.service';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';

@Controller('entertainment')
export class EntertainmentController{
constructor(private entertainmentService: EntertainmentService){}

   @Post()

   @ApiCreatedResponse({
    description:'article has been created',
})

@ApiBadRequestResponse({
    description:'article cannot be created.try again'
})
    addArticle(
        @Body()CreateArticleDto: CreateArticleDto
        ){
   return this.entertainmentService.insertArticle(CreateArticleDto);
    }

    @Get()

    @ApiCreatedResponse({
        description:'articles has been retrieved',
    })
    
    @ApiBadRequestResponse({
        description:'articles cannot be retrieved.try again'
    })
    async getArticles(){
    const articles = await this.entertainmentService.getAllArticles();
    return articles;
    }

    @Get(':id')

    @ApiCreatedResponse({
        description:'article has been retrieved',
    })
    
    @ApiBadRequestResponse({
        description:'article cannot be retrieved.try again'
    })
    async getSingleArticleById(
        @Param('id', ParseIntPipe) id:number,
    ){
        const articles = await this.entertainmentService.getSingleArticle(id);
        return articles;
        }

    @Patch(':id')

    @ApiCreatedResponse({
        description:'article has been updated',
    })
    
    @ApiBadRequestResponse({
        description:'article cannot be updated.try again'
    })
    async updateArticleById(
        @Param('id', ParseIntPipe) id:number,
        @Body() updateArticleDto: updateArticleDto,
    ){
     const articles = await this.entertainmentService.updateArticle(id, updateArticleDto);
     return articles;
    }
    
    @Delete(':id')

    @ApiCreatedResponse({
        description:'article has been deleted',
    })
    
    @ApiBadRequestResponse({
        description:'article cannot be deleted.try again'
    })
    async deleteArticleById(
        @Param('id', ParseIntPipe) id:number,
    ){
     await this.entertainmentService.deleteArticle(id);
     console.log('DELETED SUCCESSFULLY')
    }

    @Post('clubs')

    @ApiCreatedResponse({
        description:'article has been created',
    })
    
    @ApiBadRequestResponse({
        description:'article cannot be created.try again'
    })
    addClub(
        @Body()CreateClubsDto: CreateClubsDto
        ){
   return this.entertainmentService.insertClub(CreateClubsDto);
    }

    @Get('clubs')

    @ApiCreatedResponse({
        description:'clubs has been retrieved',
    })
    
    @ApiBadRequestResponse({
        description:'clubs cannot be retrieved.try again'
    })
    async getClubs(){
    const clubs = await this.entertainmentService.getAllClubs();
    return clubs;
    }

    @Get(':id')

    @ApiCreatedResponse({
        description:'club has been retrieved',
    })
    
    @ApiBadRequestResponse({
        description:'club cannot be retrieved.try again'
    })
    async getSingleClubById(
        @Param('id', ParseIntPipe) id:number,
    ){
        const club = await this.entertainmentService.getSingleClub(id);
        return club;
        }

        @Patch(':id')

        @ApiCreatedResponse({
            description:'club has been updated',
        })
        
        @ApiBadRequestResponse({
            description:'club cannot be updated.try again'
        })
    async updateClubsById(
        @Param('id', ParseIntPipe) id:number,
        @Body() updateClubsDto: updateClubsDto,
    ){
     const club = await this.entertainmentService.updateClub(id, updateClubsDto);
     return club;
    }

    @Delete(':id')

    @ApiCreatedResponse({
        description:'club has been deleted',
    })
    
    @ApiBadRequestResponse({
        description:'club cannot be deleted.try again'
    })
    async deleteClubById(
        @Param('id', ParseIntPipe) id:number,
    ){
     await this.entertainmentService.deleteClub(id);
     console.log('DELETED SUCCESSFULLY')
    }

}