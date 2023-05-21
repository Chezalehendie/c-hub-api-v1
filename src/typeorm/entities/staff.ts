import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class staff{

    @PrimaryGeneratedColumn()
    staffId: number;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column()
    position:string;

    @Column()
    address:string;

    @Column()
    email:string;

    @Column()
    phoneNumber:number;
    
}