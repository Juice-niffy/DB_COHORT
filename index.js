import "dotenv/config";
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';
import productRoute from './routes/productRoutes.js'
import dns from 'node:dns';

const compass_string = process.env.COMPASS_STRING;
const atlas_string = process.env.ATLAS_STRING;

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