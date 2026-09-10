import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';
import productRoute from './routes/productRoutes.js'
import dns from 'node:dns';

const compass_string = "mongodb://localhost:27017/cohort8_db"
const atlas_string = "mongodb+srv://oduduoluwanifemi2_db_user:Niffidon@cluster0.f10rnyq.mongodb.net/cohort8_db?appName=Cluster0"

dns.setServers(['8.8.8.8', '1.1.1.1']);

mongoose.connect(atlas_string)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Connection error", err));

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('SERVER IS RUNNING');
});

app.use('/users', userRouter);
app.use("/products", productRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});