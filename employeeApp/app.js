import express from 'express'
import employeeRouter from './routes/employeeRouter.js';
import dotenv from 'dotenv'
import { dbConnect } from './db/dbConnection.js';
const app= express()
app.use(express.json());
dotenv.config()
app.use("/employee",employeeRouter)
const dbName=process.env.DBNAME
const dbUrl=process.env.DBURL
// dbConnect(dbUrl,dbName);
const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})

export default app;