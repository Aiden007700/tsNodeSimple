import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, BaseEntity, Relation } from "typeorm"
import { Restaurants } from './restaurants'
import { Dishes } from './dishes'

@Entity('users')
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    @OneToMany(() => Restaurants, (restaurant: Restaurants) => restaurant.user)
    restaurants: Relation<Restaurants>[]

    @ManyToMany(() => Dishes)
    @JoinTable()
    dishes: Relation<Dishes>[]

    @Column("timestampz")
    @CreateDateColumn()
    created_at: Date;
  
    @Column("timestampz")
    @UpdateDateColumn()
    updated_at: Date;
}