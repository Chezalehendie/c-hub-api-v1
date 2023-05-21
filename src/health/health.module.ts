import { TypeOrmModule } from "@nestjs/typeorm";
import { HealthController } from "./health.controller";
import { HealthService } from "./health.service";
import { health } from "src/typeorm/entities/health";
import { Module } from "@nestjs/common";
import { staff } from "src/typeorm/entities/staff";

@Module({
    imports:[TypeOrmModule.forFeature([health,staff])],
    controllers : [HealthController],
    providers : [HealthService],
  }) 
  export class HealthModule{}