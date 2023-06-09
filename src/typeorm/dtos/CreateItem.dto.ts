import { ApiProperty } from "@nestjs/swagger";

export class CreateItemDto{

    @ApiProperty({
        description:'the name of the item to be sold',
        example:'laptop',
     })
    itemName:string;

    @ApiProperty({
        description:'id of the item',
        example:'1',
     })
    id:number;
 }