import { ApiProperty } from "@nestjs/swagger";

export class CreateArticleDto{

   @ApiProperty({
      description:'the name of the article to be posted',
      example:'unima vigils',
   })
   articleName:string;

   @ApiProperty({
      description:'the name of the person who wrote the article',
      example:'Hendrina Chezale',
   })
   author:string;
}