import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js';

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDB is connected")
    })

const app = express();

app.listen(3500, () => {
    console.log('Server is running on port 3500')
})

app.use('/api/user', userRoute)