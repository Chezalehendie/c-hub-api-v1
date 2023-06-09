import { ApiProperty } from "@nestjs/swagger";

export class CreateClubsDto{

   @ApiProperty({
      description:'the name of the club/society',
      example:'Computer Science society',
   })
   clubName : string;

   @ApiProperty({
      description:'details about the club',
      example:'Computer Science society is a club for all students currently persuing computer related programs (information systems,computer science,computer networking) at the university of malawi', 
})
clubDetails : string;
}