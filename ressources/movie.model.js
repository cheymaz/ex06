import mongoose from 'mongoose';
const movieSchema = new mongoose.Schema({
    fields : {
        directors:Array,
        release_date:String,
        rating:Number,
        genres:Array,
        image_url:String,
        plot:String,
        title:String,
        rank:Number,
        running_time_sec:Number,
        actors:Array,
        year:Number
    },
    id:String,
    type:String
});
export const Movie = mongoose.model('movie', movieSchema);