import { Injectable,NotFoundException  } from '@nestjs/common';
import { Entertainment } from './entertainment.model';

@Injectable()
export class EntertainmentService {
private entertainment: Entertainment[] = [];

insertArticle(title:string,desc:string){
    const entId = Math.random().toString();
    const newEntertainment = new Entertainment(entId, title, desc);
    this.entertainment.push(newEntertainment);

    return entId;
}
getEntertainment(){
    return [...this.entertainment];
}
getSingleArticle(entertainmentId: string){
    const entertainment = this.findEntertainment(entertainmentId)[0];
    return {...entertainment};
}

updateArticle(entertainmentId: string, title: string,desc: string){ 
    const [entertainment, index] = this.findEntertainment(entertainmentId);
    const updatedEntertainment = {...entertainment};
    if(title){
        updatedEntertainment.title = title;
    }
    if(desc){
        updatedEntertainment.desc = desc;
    }

    this.entertainment[index] = updatedEntertainment;
    
}

private findEntertainment(id:string):[Entertainment,number]{
    const entertainmentIndex = this.entertainment.findIndex(ent=> ent.id ===id);
    const entertainment = this.entertainment[entertainmentIndex];
    if (!entertainment){
        throw new NotFoundException('could not find article');
    }
 return [entertainment,entertainmentIndex];
}
}
