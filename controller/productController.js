import productModel from '../model/productModel.js';
import userModel from '../model/userModel.js';
import cloudinary from '../config/cloudinary.js';

/**
 * create : upload product
 * get all : 
 * get single :
 * update : update product (stock)
 * delete : delete product
 */

//create / upload
export const uploadProduct = async (req, res) => {
    try {
        const getuserID = await userModel.findById(req.params.userId);
        const { name, price, description, category, stock, quantity, image } = req.body;
        if (!getuserID) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        if (!req.file) {
            return res.status(400).json({
                message: 'Image is required....please upload an image.'
            });
        }
        const result = await cloudinary.uploader.upload(req.file.path)
        const imageUrl = result.secure_url

        const product = await productModel.create({
            name, price, description, category, stock, quantity, image: imageUrl
        });
        await getuserID.products.push(product._id)
        await getuserID.save()
        res.status(201).json({
            message: 'Product uploaded successfully', product
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//get all products
export const getAllProducts = async (req, res) => {
    try {
        const getAll = await productModel.find();
        return res.status(200).json({
            message: "All products retrieved successfully",
            data: getAll
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}
export default { uploadProduct, getAllProducts };