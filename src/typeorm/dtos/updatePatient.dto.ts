import { ApiProperty } from "@nestjs/swagger";

export class updatePatientDto{

    @ApiProperty({
        description:'the name of the patient that is being updated',
        example:'Angellah Chezale',
     })
    patientName:string;

    @ApiProperty({
        description:'the id of the patient that is being updated',
        example:2,
     })
    patientId: number;

    @ApiProperty({
        description:'the unimed id of the patient that is being updated',
        example:'bsc-com-24-20',
     })
    unimedId:string;

    @ApiProperty({
        description:'the time appointed to the patient that is being updated',
        example:'laptop',
     })
    appointedTime:string;
 }