import { Injectable,NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { entertainmentArticles } from 'src/typeorm/entertainmentArticles';
import { entertainmentClubs } from 'src/typeorm/entities/entertainmentClubs';
import { CreateArticleParams, updateArticleParams, CreateClubParams, updateClubParams } from 'src/utills/types';

@Injectable()
export class EntertainmentService {

constructor(
    @InjectRepository(entertainmentArticles) private articleRepository: Repository<entertainmentArticles>,
    @InjectRepository(entertainmentArticles) private clubRepository: Repository<entertainmentClubs>
) {}

insertArticle(entDetails: CreateArticleParams){
    const newArticle = this.articleRepository.create({
        ...entDetails,
        createdAt:new Date(),
    });
    return this.articleRepository.save(newArticle);
}
getAllArticles(){
    return this.articleRepository.find();
}
getSingleArticle(id: number){
    return this.articleRepository.find();
}

updateArticle(id: number, updateArticleDetails: updateArticleParams){ 
  return  this.articleRepository.update({ id }, {...updateArticleDetails});
}

deleteArticle(id: number){
return this.articleRepository.delete({ id });
}

//entertainment clubs implementation
insertClub(clubDetails: CreateClubParams){
    const newClub = this.clubRepository.create({
        ...clubDetails
    });
    return this.clubRepository.save(newClub);
}

getAllClubs(){
    return this.clubRepository.find();
}

getSingleClub(id: number){
    return this.clubRepository.find();
}

updateClub(id: number, updateClubDetails: updateClubParams){ 
    return  this.clubRepository.update({ id }, {...updateClubDetails});
  }

  deleteClub(id: number){
    return this.clubRepository.delete({ id });
    }
}

