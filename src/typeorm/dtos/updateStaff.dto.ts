import { ApiProperty } from "@nestjs/swagger";

export class updateStaffDto{

    @ApiProperty({
        description:'the first name of the staff that is being updated',
        example:'Hendrina',
     })
    firstName : string;

    @ApiProperty({
        description:'the last name of the staff that is being updated',
        example:'Chezale',
     })
    lastName: string;

    @ApiProperty({
        description:'the id of the staff that is being updated',
        example:2,
     })
    staffId:number;

    @ApiProperty({
        description:'the work position of the staff that is being updated',
        example:'nurse',
     })
    position:string;

    @ApiProperty({
        description:'the residential address of the staff that is being updated',
        example:'3 miles',
     })
    address:string;

    @ApiProperty({
        description:'the email address of the staff that is being updated',
        example:'johndoe@getMaxListeners.com',
     })
    email:string;

    @ApiProperty({
        description:'the phone number of the staff that is being updated',
        example:882081000,
     })
    phoneNumber:number;
 }