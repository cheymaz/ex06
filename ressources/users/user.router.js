import { Router } from 'express';
import { userList, getOneUser, createUser, updateOne, deleteOne, login } from './user.controller';
import {verifyToken} from '../../utils/verifytoken';
import {verify} from '../../utils/verify';

const router = Router();

router
    .route('/')
    .get(userList)
    .post(createUser)

router
    .route('/:id')
    .get(getOneUser)
    .put(updateOne)
    .delete(verifyToken, verify, deleteOne)

router 
    .route('/login')
    .post(login)

export default router;