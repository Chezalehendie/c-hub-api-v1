import { ApiProperty } from "@nestjs/swagger";

export class CreateAppointmentDto{

    @ApiProperty({
        description:'the name of the patient',
        example:'Hendrina chezale',
    })
    patientName:string;

    @ApiProperty({
        description:'the patients number in the database',
        example:'1',
    })
    patientId: number;

    @ApiProperty({
        description:'the patients unimed id',
        example:'bsc-com-24-19',
    })
    unimedId:string;

    @ApiProperty({
        description:'the time for the appointment',
        example:'12:30pm',
    })
    appointedTime:string;
    
 }