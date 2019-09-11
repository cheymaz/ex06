import { Router } from 'express';
import {list, getOne, newMovie, deleteOne, updateOne} from './movie.controller';
const router = Router();

router
    .route('/')
    .get(list)
    .post(newMovie)
router
    .route('/:id')
    .get(getOne)
    .delete(deleteOne)
    .put(updateOne)

export default router;