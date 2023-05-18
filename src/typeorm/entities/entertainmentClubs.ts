import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class entertainmentClubs{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    clubName:string;
    
    @Column()
    clubDetails:string;
}