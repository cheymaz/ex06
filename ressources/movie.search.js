import {Movie} from './movie.model';

const search = async (req,res)=>{
    try {
        const searchQuery = await Movie.find(req.query);
        console.dir(searchQuery);
        res.status(200).json({movies:searchQuery});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}

export default search;