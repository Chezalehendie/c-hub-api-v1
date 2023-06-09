import { ApiProperty } from "@nestjs/swagger";

export class updateClubsDto{

    @ApiProperty({
        description:'the name of the club that is being updated',
        example:'CCAPSO',
     })
    clubName:string;

    @ApiProperty({
        description:'the details of the club that is being updated',
        example:'CCAPSO is a christian organisation for students who are members of CCAP',
     })
    clubDetails:string;
 }