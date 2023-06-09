import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { HealthService } from './health.service';
import { CreateAppointmentDto} from 'src/typeorm/dtos/CreateAppointment.dto';
import { updatePatientDto} from 'src/typeorm/dtos/updatePatient.dto';
import { updateStaffDto} from 'src/typeorm/dtos/updateStaff.dto';
import { CreateStaffDto} from 'src/typeorm/dtos/CreateStaff.dto';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';

@Controller('health')
export class HealthController{
constructor(private healthService: HealthService){}

//http request for the patients
@Post()
@ApiCreatedResponse({
    description:'appointment has been created',
})

@ApiBadRequestResponse({
    description:'appointment cannot be created.try again'
})
//adding a new patient on the appointments list 
    addPatient(
        @Body()createAppointmentDto: CreateAppointmentDto
        ){
   return this.healthService.insertAppointment(createAppointmentDto);
    }

    //getting all patients details from the apppointments list
    @Get()
    @ApiCreatedResponse({
        description:'appointments have been retrieved',
    })
    
    @ApiBadRequestResponse({
        description:'appointments cannot be retrieved.try again'
    })
    async getPatients(){
    const patients = await this.healthService.getAllPatients();
    return patients;
    }

    //getting  a single patients details using an id from the appointments list
    @Get(':id')
    @ApiCreatedResponse({
        description:'appointment has been retrieved',
    })
    
    @ApiBadRequestResponse({
        description:'appointment cannot be retrieved.try again'
    })
    async getSinglePatientById(
        @Param('id', ParseIntPipe) id:number,
    ){
        const patient = await this.healthService.getSinglePatient(id);
        return patient;
        }

        //updating a a single patients details on the appointments list
        @Patch(':id')

        @ApiCreatedResponse({
            description:'appointment has been updated',
        })
        
        @ApiBadRequestResponse({
            description:'appointment cannot be updated.try again'
        })
        async updatePatientById(
            @Param('id', ParseIntPipe) id:number,
            @Body() updatePatientDto: updatePatientDto,
        ){
         const patient = await this.healthService.updatePatient(id, updatePatientDto);
         return patient;
        }

        //deleting a single patient from the list using an id
        @Delete(':id')
        @ApiCreatedResponse({
            description:'articles has been deleted',
        })
        
        @ApiBadRequestResponse({
            description:'articles cannot be deleted.try again'
        })
    async deletePatientById(
        @Param('id', ParseIntPipe) id:number,
    ){
     await this.healthService.deletePatient(id);
     console.log('DELETED SUCCESSFULLY')
    }
        //http requests for the hospital staff
        @Post('staff')
        @ApiCreatedResponse({
            description:'staff has been created',
        })
        
        @ApiBadRequestResponse({
            description:'staff cannot be created.try again'
        })
    addClub(
        @Body()CreateStaffDto: CreateStaffDto
        ){
   return this.healthService.insertClub(CreateStaffDto);
    }

     //getting all staff details from the staff list
     @Get()
     @ApiCreatedResponse({
        description:'staffs has been retrieved',
    })
    
    @ApiBadRequestResponse({
        description:'staffs cannot be retrieved.try again'
    })
     async getStaff(){
     const staff = await this.healthService.getAllStaff();
     return staff;
     }

    //getting  a single staff's details using an id from the staff list
    @Get(':id')
    @ApiCreatedResponse({
        description:'staff has been retrieved',
    })
    
    @ApiBadRequestResponse({
        description:'staff cannot be retrieved.try again'
    })
    async getSingleStaffById(
        @Param('id', ParseIntPipe) id:number,
    ){
        const staff = await this.healthService.getSingleStaff(id);
        return staff;
        }
 
          //updating a a single staff's details on the list
          @Patch(':id')
          async updateStaffById(
              @Param('id', ParseIntPipe) id:number,
              @Body() updateStaffDto: updateStaffDto,
          ){
           const staff = await this.healthService.updateStaff(id, updateStaffDto);
           return staff;
          }

             //deleting a staff from the list using an id
        @Delete(':id')
        @ApiCreatedResponse({
            description:'staff has been deleted',
        })
        
        @ApiBadRequestResponse({
            description:'staff cannot be deleted.try again'
        })
        async deleteStaffById(
            @Param('id', ParseIntPipe) id:number,
        ){
         await this.healthService.deleteStaff(id);
         console.log('DELETED SUCCESSFULLY')
        }
}