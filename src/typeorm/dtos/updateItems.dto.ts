import { ApiProperty } from "@nestjs/swagger";

export class updateItemsDto{

    @ApiProperty({
        description:'the name of the item that is being updated',
        example:'laptop',
     })
    itemName:string;
 }