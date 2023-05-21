import { Injectable,NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { health } from 'src/typeorm/entities/health';
import { staff } from 'src/typeorm/entities/staff';
import { Repository } from 'typeorm';
import { CreateAppointmentParams, updateStaffParams } from 'src/utills/types';
import { updatePatientParams } from 'src/utills/types';
import { CreateStaffParams } from 'src/utills/types';

@Injectable()
export class HealthService {
    constructor(
        @InjectRepository(health) private healthRepository: Repository<health>,
        @InjectRepository(health) private staffRepository: Repository<staff>,
    ){}

    insertAppointment(patientName: CreateAppointmentParams){
        const newAppointment = this.healthRepository.create({
            ...patientName,
        });
        return this.healthRepository.save(newAppointment);
    }

    getAllPatients(){
        return this.healthRepository.find();
    }

    getSinglePatient(id: number){
        return this.healthRepository.find();
    }

    updatePatient(id: number, updatePatientDetails: updatePatientParams){ 
        return  this.healthRepository.update(id, {...updatePatientDetails});
      }

      deletePatient(id: number){
        return this.healthRepository.delete(id);
        }
//staff http requests implementation
        insertClub(staffDetails: CreateStaffParams){
            const newStaff = this.staffRepository.create({
                ...staffDetails
            });
            return this.staffRepository.save(newStaff);
        }

        getAllStaff(){
            return this.staffRepository.find();
        }
        
        getSingleStaff(id: number){
            return this.staffRepository.find();
        }

        updateStaff(id: number, updateStaffDetails: updateStaffParams){ 
            return  this.staffRepository.update(id, {...updateStaffDetails});
          }

          deleteStaff(id: number){
            return this.staffRepository.delete(id);
            }
}
