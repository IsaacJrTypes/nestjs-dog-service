import { Column,CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('dogs')
export class Dogs {
    @PrimaryGeneratedColumn("increment")
    id?:number;
    @Column({type: 'varchar',length:30})
    name:string;
}