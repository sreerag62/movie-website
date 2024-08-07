import mongoose from 'mongoose';
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  director: String,
  releaseyear: Number,
  rating: Number,
  genre: String,
  image:String,
 // reviews: [{type:mongoose.Schema.Types.ObjectId,ref:'Review'}]

 
});


const Movie = mongoose.model('Movie', movieSchema);
export default Movie;