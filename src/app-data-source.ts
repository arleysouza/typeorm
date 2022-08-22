import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from 'dotenv'
dotenv.config()

//https://orkhan.gitbook.io/typeorm/docs/data-source-options
export const AppDataSource = new DataSource({
    url: process.env.BD_URL,
    type: "postgres",
    synchronize: true, // indicates if database schema should be auto created on every application launch
    logging: false, // if set to true then query and error logging will be enabled
    entities: ["src/entity/*.ts"], //Each entity must be registered in your data source options
    migrations: [],
    subscribers: [],
    maxQueryExecutionTime: 2000 // 2 seg.
})

// https://orkhan.gitbook.io/typeorm/docs/data-source
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })