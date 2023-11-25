import express from 'express';
import router from './Routes/route.js';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import connectDB from './utils/config.js';
import cors from 'cors';

const port = process.env.PORT || 3001;
const app = express();
connectDB();

app.use(cors({ origin: 'http://localhost:2000'}));



app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.use('/', router);

app.listen(port, () => {
  console.log(`Server connected to ${port}`);
});
