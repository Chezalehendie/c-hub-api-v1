import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class health{

    @PrimaryGeneratedColumn()
    patientId: number;

    @Column({unique:true})
    patientName:string;

    @Column()
    unimedId:string;

    @Column()
    appointedTime:string;
    
}