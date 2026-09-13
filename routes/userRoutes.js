import express from 'express';
import { createUser, getAllUsers, getSingleUser, deleteUser, updateUser, loginUser } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.post('/new-user', createUser);
userRouter.get('/all-users', getAllUsers);
userRouter.get('/get-one-user/:userId', getSingleUser);
userRouter.delete('/delete-user/:userId', deleteUser);
userRouter.patch('/update-user/:userId', updateUser);
userRouter.post('/login', loginUser);

export default userRouter;
