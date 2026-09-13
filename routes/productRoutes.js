import express from 'express'
import { getAllProducts, uploadProduct } from '../controller/productController.js'
import upload from '../config/multer.js'

const route = express.Router();

route.post('/upload/:userId', upload.single('image'), uploadProduct);
route.get('/getall', getAllProducts);

export default route;