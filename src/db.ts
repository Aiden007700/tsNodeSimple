// @ts-nocheck
import * as dotenv from 'dotenv' 
dotenv.config()

import { DataSource } from 'typeorm'
import { Dishes } from './entitys/dishes'
import { Restaurants } from './entitys/restaurants'
import { Users } from './entitys/users'

const AppDataSource = new DataSource({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Users, Restaurants, Dishes],
    synchronize: true,
    logging: false,
})

const dbConnection = AppDataSource
const entityManager = dbConnection.manager;

async function connect () {
    await dbConnection.initialize()
    await dbConnection.synchronize(true)
    console.log("Connected to DB");
}

connect()

export default entityManager