import { ApiProperty } from "@nestjs/swagger";

export class updateArticleDto{

    @ApiProperty({
        description:'the name of the article that is being updated',
        example:'Hendrina',
     })
    articleName:string;

    @ApiProperty({
        description:'the name of the person updating an article',
        example:'Hendrina',
     })
    author:string;
 }