import express from 'express'
import { getAllProducts, uploadProduct } from '../controller/productController.js'

const route = express.Router();

route.post('/upload/:userId', uploadProduct);
route.get('/getall', getAllProducts);

export default route;