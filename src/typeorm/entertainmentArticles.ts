import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class entertainmentArticles{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    articleName:string;

    @Column()
    author:string;

    @Column()
    createdAt:Date;
}