import express from 'express';
import {json, urlencoded} from 'body-parser';
import {connect} from './utils/db';

import moviesRouter from './ressources/movie.router';
import movieSearch from './ressources/movie.search';
import userRouter from './ressources/users/user.router';
const app = express();

app.disable('x-powered-by');
app.use(json());
app.use(urlencoded({extended:true}));

app.use('/api/movies',moviesRouter)
app.use('/search',movieSearch)
app.use('/api/users', userRouter)

const start = async () => {
    try{
        await connect()
        app.listen(8001,()=>{
            console.log('REST API listening on port 8001')
        })
    } catch(err){
        throw err;
    }
}
start();