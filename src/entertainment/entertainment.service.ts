import { Injectable,NotFoundException  } from '@nestjs/common';
import { Entertainment } from './entertainment.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { entertainmentArticles } from 'src/typeorm/entertainmentArticles';
import { CreateArticleParams } from 'src/utills/types';

@Injectable()
export class EntertainmentService {

constructor(
    @InjectRepository(entertainmentArticles) private articleRepository: Repository<entertainmentArticles>,
) {}

insertArticle(entDetails: CreateArticleParams){
    const newArticle = this.articleRepository.create({
        ...entDetails,
        createdAt:new Date(),
    });
    return this.articleRepository.save(newArticle);
}
getEntertainment(){
    
}
getSingleArticle(){

}

updateArticle(){ 
    
}
deleteArticle(){

}
}

