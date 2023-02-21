import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, BaseEntity, Relation } from "typeorm"
import { Users } from './users'

@Entity('restaurants')
export class Restaurants extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    @Column('text')
    description: string

    @ManyToOne(() => Users, (user: Users) => user.restaurants)
    user: Relation<Users>

    @Column("timestampz")
    @CreateDateColumn()
    created_at: Date;
  
    @Column("timestampz")
    @UpdateDateColumn()
    updated_at: Date;
}