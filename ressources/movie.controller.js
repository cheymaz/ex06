import {Movie} from './movie.model';

export const list = async (req,res)=>{
    try {
        const movies = await Movie.find();
        if(!movies) return res.status(400).end();
        res.status(200).json({movies:movies});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}
export const getOne = async (req,res)=>{
    try {
        const movies = await Movie.findOne({_id:req.params.id});
        if(!movies) return res.status(400).end();
        res.status(200).json({movies:movies});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}
export const newMovie = async (req,res)=>{
    try {
        const movies = await Movie.create({...req.body});
        res.status(201).json({movies});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}
export const deleteOne = async (req,res)=>{
    try {
        const deleteMovie = await Movie.findByIdAndDelete({_id:req.params.id});
        if(!deleteMovie) return res.status(400).end();
        res.status(200).json({movies:deleteMovie});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}
export const updateOne = async (req,res)=>{
    try {
        const updatedMovie = await Movie.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
            );
        if(!updatedMovie) return res.status(400).end();
        res.status(200).json({movies:updatedMovie});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}
