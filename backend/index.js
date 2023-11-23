import express from 'express'
import router from './Routes/route.js'
import dotenv from "dotenv";
dotenv.config();
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import connectDB from './utils/config.js'

const port = process.env.PORT || 3001;
const app=express()
connectDB()
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.use('/',router)

app.listen(port,()=>{
    console.log(`server connected to ${port}`)
})