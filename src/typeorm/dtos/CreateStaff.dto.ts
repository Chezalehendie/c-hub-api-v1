import { ApiProperty } from "@nestjs/swagger";

export class CreateStaffDto{

    @ApiProperty({
        description:'the first name for the member of staff',
        example:'Hendrina',
     })
    firstName : string;

    @ApiProperty({
        description:'the last name for the member of staff',
        example:'Chezale',
     })
    lastName: string;

    @ApiProperty({
        description:'the id for the staff',
        example:1,
     })
    staffId:number;

    @ApiProperty({
        description:'working position at the clinic',
        example:'doctor',
     })
    position:string;

    @ApiProperty({
        description:'residential address',
        example:'chikanda',
     })
    address:string;

    @ApiProperty({
        description:'email address',
        example:'hendrinahchezale2gmail.com',
     })
    email:string;

    @ApiProperty({
        description:'phone number for the member of staff',
        example:994789909,
     })
    phoneNumber:number;
 }