import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('dishes')
export class Dishes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    @Column('text')
    description: string

    @Column()
    price: number

    @Column()
    review: number

    @Column("timestampz")
    @CreateDateColumn()
    created_at: Date;
  
    @Column("timestampz")
    @UpdateDateColumn()
    updated_at: Date;
}