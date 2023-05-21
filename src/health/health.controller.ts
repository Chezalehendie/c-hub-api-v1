import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { HealthService } from './health.service';
import { CreateAppointmentDto} from 'src/typeorm/dtos/CreateAppointment.dto';
import { updatePatientDto} from 'src/typeorm/dtos/updatePatient.dto';
import { updateStaffDto} from 'src/typeorm/dtos/updateStaff.dto';
import { CreateStaffDto} from 'src/typeorm/dtos/CreateStaff.dto';

@Controller('health')
export class HealthController{
constructor(private healthService: HealthService){}

//http request for the patients
@Post()
//adding a new patient on the appointments list 
    addPatient(
        @Body()createAppointmentDto: CreateAppointmentDto
        ){
   return this.healthService.insertAppointment(createAppointmentDto);
    }

    //getting all patients details from the apppointments list
    @Get()
    async getPatients(){
    const patients = await this.healthService.getAllPatients();
    return patients;
    }

    //getting  a single patients details using an id from the appointments list
    @Get(':id')
    async getSinglePatientById(
        @Param('id', ParseIntPipe) id:number,
    ){
        const patient = await this.healthService.getSinglePatient(id);
        return patient;
        }

        //updating a a single patients details on the appointments list
        @Patch(':id')
        async updatePatientById(
            @Param('id', ParseIntPipe) id:number,
            @Body() updatePatientDto: updatePatientDto,
        ){
         const patient = await this.healthService.updatePatient(id, updatePatientDto);
         return patient;
        }

        //deleting a single patient from the list using an id
        @Delete(':id')
    async deletePatientById(
        @Param('id', ParseIntPipe) id:number,
    ){
     await this.healthService.deletePatient(id);
     console.log('DELETED SUCCESSFULLY')
    }
        //http requests for the hospital staff
        @Post('staff')
    addClub(
        @Body()CreateStaffDto: CreateStaffDto
        ){
   return this.healthService.insertClub(CreateStaffDto);
    }

     //getting all staff details from the staff list
     @Get()
     async getStaff(){
     const staff = await this.healthService.getAllStaff();
     return staff;
     }

    //getting  a single staff's details using an id from the staff list
    @Get(':id')
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
        async deleteStaffById(
            @Param('id', ParseIntPipe) id:number,
        ){
         await this.healthService.deleteStaff(id);
         console.log('DELETED SUCCESSFULLY')
        }
}