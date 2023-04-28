import { Controller, Post, Body, Get,Param, Patch } from '@nestjs/common';
import { EntertainmentService } from './entertainment.service';

@Controller('entertainment')
export class EntertainmentController{
constructor(private readonly entertainmentService: EntertainmentService){}

   @Post()
    addArticle(
        @Body('title') entTitle:string,
        @Body('description') entDesc:string,
        ){
   
   const generatedId = this.entertainmentService.insertArticle(
    entTitle,
    entDesc,
    );
   return { id: generatedId};
    }
    @Get()
    getAllArticles(){
        return this.entertainmentService.getEntertainment();
    }
    @Get(':id')
    getArticle(@Param('id')entId:string,){
        return this.entertainmentService.getSingleArticle(entId);
    }
    @Patch(':id')
    updateArticle(
         @Param('id') entId: string,
         @Body('title') entTitle: string,
         @Body('description') entDesc: string
        ){
            this.entertainmentService.updateEntertainment(entId,entTitle,entDesc)
        }
}