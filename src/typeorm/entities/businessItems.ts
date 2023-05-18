import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class businessItems{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    itemName:string;
    
}